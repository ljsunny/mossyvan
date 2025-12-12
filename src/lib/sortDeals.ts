import { isDealExpired } from "./isDealExpired";

export function sortDeals(deals) {
  return deals.sort((a, b) => {
    const expiredA = isDealExpired(a);
    const expiredB = isDealExpired(b);

    if (expiredA && !expiredB) return 1;   // expired → 뒤로
    if (!expiredA && expiredB) return -1;  // active → 앞으로

    return new Date(b.created_at) - new Date(a.created_at);
  });
}