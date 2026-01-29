import type { Deal } from "@/types/deal";
import { isDealExpired } from "./isDealExpired";

export function sortDeals(deals: Deal[]): Deal[] {
  return [...deals].sort((a, b) => {
    const expiredA = isDealExpired(a);
    const expiredB = isDealExpired(b);

    if (expiredA && !expiredB) return 1;   // expired → 뒤
    if (!expiredA && expiredB) return -1;  // active → 앞

    return (
      new Date(b.created_at).getTime() -
      new Date(a.created_at).getTime()
    );
  });
}
