import { redirect } from "next/navigation";

export const metadata = {
  title: "Wishlist — ZENJI",
};

export default function AccountWishlistPage() {
  redirect("/login?next=/account/wishlist");
}