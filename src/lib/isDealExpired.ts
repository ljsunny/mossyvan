export function isDealExpired(deal) {
  if (!deal.end_date) return false; // always type
  return new Date(deal.end_date) < new Date();
}
