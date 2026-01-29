import type { Deal } from "@/types/deal";

export function getDealTimeLabel(deal: Deal): string {
  const now = new Date();

  // 날짜가 아예 없으면
  if (!deal.start_date && !deal.end_date) {
    return deal.category === "happyhour" ? "Happy Hour" : "Ongoing";
  }

  // end_date 없으면 ongoing
  if (!deal.end_date) {
    return deal.category === "happyhour" ? "Happy Hour" : "Ongoing";
  }

  const end = new Date(deal.end_date);
  if (Number.isNaN(end.getTime())) {
    return deal.category === "happyhour" ? "Happy Hour" : "Ongoing";
  }

  const diffDays = Math.ceil(
    (end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  // flashdeals 탭이면 오늘만 문구
  if (deal.category === "flashdeals" && diffDays === 0) {
    return "Today only";
  }

  if (diffDays < 0) return "Expired";
  if (diffDays === 0) return "Ends today";
  return `${diffDays} days left`;
}
