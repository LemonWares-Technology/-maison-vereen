// /journal → redirect to /housebook (renamed from "The Journal" to "The HouseBook")
import { redirect } from "next/navigation";

export default function JournalRedirect() {
  redirect("/housebook");
}
