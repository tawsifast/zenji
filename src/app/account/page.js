import { redirect } from "next/navigation";

export const metadata = {
  title: "Account — ZENJI",
};

export default function AccountPage() {
  redirect("/login?next=/account");
}