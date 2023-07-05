import { redirect } from "next/navigation";

export default async function OtherPage() {
  redirect("/notfound");
}
