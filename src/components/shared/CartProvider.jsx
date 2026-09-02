"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useSyncExternalStore,
} from "react";
import { calcShipping } from "@/data/shop";

const CartContext = createContext(null);

const CART_KEY = "zenji_cart_v2";
const WISHLIST_KEY = "zenji-wishlist-guest";

let storeItems = [];
let storeWishlist = [];
const listeners = new Set();
const EMPTY_CART = [];
const EMPTY_WISHLIST = [];
let storeHydrated = false;

function emitChange() {
  for (const l of listeners) l();
}

function subscribe(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getCartSnapshot() {
  return storeItems;
}
function getServerCartSnapshot() {
  return EMPTY_CART;
}
function getWishlistSnapshot() {
  return storeWishlist;
}
function getServerWishlistSnapshot() {
  return EMPTY_WISHLIST;
}
function getHydratedSnapshot() {
  return storeHydrated;
}
function getServerHydratedSnapshot() {
  return false;
}

function readLS(key) {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeLS(key, value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

function itemPrice(p) {
  return p.onSale && p.salePrice ? p.sale : p.price;
}

function fmt(value) {
  return `A$${Number(value).toFixed(2)}`;
}

export function CartProvider({ children }) {
  const [open, setOpen] = useState(false);

  const items = useSyncExternalStore(
    subscribe,
    getCartSnapshot,
    getServerCartSnapshot
  );
  const wishlist = useSyncExternalStore(
    subscribe,
    getWishlistSnapshot,
    getServerWishlistSnapshot
  );
  const hydrated = useSyncExternalStore(
    subscribe,
    getHydratedSnapshot,
    getServerHydratedSnapshot
  );

  // Load persisted cart + wishlist once after mount (server renders empty).
  useEffect(() => {
    const rawCart = readLS(CART_KEY);
    if (rawCart) {
      try {
        const parsed = JSON.parse(rawCart);
        storeItems = Array.isArray(parsed) ? parsed : [];
      } catch {
        /* ignore corrupt */
      }
    }
    const rawWish = readLS(WISHLIST_KEY);
    if (rawWish) {
      try {
        const parsed = JSON.parse(rawWish);
        storeWishlist = Array.isArray(parsed) ? parsed : [];
      } catch {
        /* ignore corrupt */
      }
    }
    storeHydrated = true;
    emitChange();
  }, []);

  const commitItems = (next) => {
    storeItems = next;
    writeLS(CART_KEY, JSON.stringify(next));
    emitChange();
  };

  const commitWishlist = (next) => {
    storeWishlist = next;
    writeLS(WISHLIST_KEY, JSON.stringify(next));
    emitChange();
  };

  const addItem = useCallback((product, size) => {
    const chosenSize = size || (Array.isArray(product.sizes) && product.sizes[0]) || "M";
    const key = `${product.slug}__${chosenSize}`;
    const existing = storeItems.find((it) => it.key === key);
    const next = existing
      ? storeItems.map((it) =>
          it.key === key ? { ...it, quantity: it.quantity + 1 } : it
        )
      : [
          ...storeItems,
          {
            key,
            slug: product.slug,
            name: product.name,
            size: chosenSize,
            quantity: 1,
            price: product.price,
            originalPrice: product.onSale ? product.sale : product.price,
            onSale: Boolean(product.onSale),
            sale: product.salePrice ? product.sale : null,
            image: product.images ? product.images.front : product.front,
            sku: product.sku || "",
          },
        ];
    commitItems(next);
    setOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    commitItems(storeItems.filter((it) => it.key !== key));
  }, []);

  const updateQty = useCallback((key, qty) => {
    commitItems(
      qty <= 0
        ? storeItems.filter((it) => it.key !== key)
        : storeItems.map((it) => (it.key === key ? { ...it, quantity: qty } : it))
    );
  }, []);

  const clearCart = useCallback(() => {
    commitItems([]);
  }, []);

  const count = items.reduce((sum, it) => sum + (it.quantity || 0), 0);
  const subtotal = items.reduce(
    (sum, it) => sum + (it.quantity || 0) * itemPrice(it),
    0
  );
  const shipping = calcShipping(subtotal);
  const total = subtotal + shipping;

  const toggleWishlist = useCallback((slug) => {
    commitWishlist(
      storeWishlist.includes(slug)
        ? storeWishlist.filter((s) => s !== slug)
        : [...storeWishlist, slug]
    );
  }, []);

  const isWishlisted = useCallback(
    (slug) => wishlist.includes(slug),
    [wishlist]
  );

  return (
    <CartContext.Provider
      value={{
        open,
        setOpen,
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        count,
        subtotal,
        shipping,
        total,
        hydrated,
        fmt,
        wishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}