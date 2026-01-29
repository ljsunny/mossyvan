import type { Deal } from "@/types/deal";

export function isDealExpired(deal: Deal): boolean {
  if (!deal.end_date) return false; // ongoing
  return new Date(deal.end_date) < new Date();
}
