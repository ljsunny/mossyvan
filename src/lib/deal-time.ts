import { Deal } from "@/types/deal";

export function getDealTimeLabel(deal: Deal): string {
  const now = new Date();

  // Always available
  if (deal.type === "always") {
    return "Always";
  }

  // Daily time range (Happy Hour)
  if (deal.type === "happy-hour" && deal.daily_time_start && deal.daily_time_end) {
    return `Daily ${deal.daily_time_start}–${deal.daily_time_end}`;
  }

  // No date range → treat as ongoing
  if (!deal.start_date && !deal.end_date) {
    return "Ongoing";
  }

  // Date-based logic
  const end = new Date(deal.end_date);
  const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  // Flash sale (same-day)
  if (deal.type === "flash" && diff === 0) {
    return "Today only";
  }

  // Expired
  if (diff < 0) {
    return "Expired";
  }

  // Weekly / date-range
  if (diff > 0) {
    return `${diff} days left`;
  }

  return "Ends today";
}
