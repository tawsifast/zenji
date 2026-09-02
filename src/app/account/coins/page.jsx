import { redirect } from "next/navigation";

export const metadata = {
  title: "Coins — ZENJI",
};

export default function AccountCoinsPage() {
  redirect("/login?next=/account/coins");
}