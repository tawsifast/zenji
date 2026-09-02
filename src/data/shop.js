export const FREE_SHIPPING_THRESHOLD = 100;
export const SHIPPING_FLAT = 9.99;
export const DELIVERY_ESTIMATE = "5-10 business days";
export const AU_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export function fmtMoney(value) {
  return `A$${Number(value).toFixed(2)}`;
}

export function calcShipping(subtotal) {
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
}

export function calcTotal(subtotal, shipping) {
  return subtotal + shipping;
}