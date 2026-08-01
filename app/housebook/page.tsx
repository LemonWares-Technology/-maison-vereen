// /housebook → redirect to /journal
import { redirect } from "next/navigation";

export default function HousebookRedirect() {
  redirect("/journal");
}
