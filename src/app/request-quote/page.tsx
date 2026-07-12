import { redirect } from "next/navigation";

export default function RequestQuoteRedirectPage() {
  redirect("/ai-hire-now-form?type=quote");
}
