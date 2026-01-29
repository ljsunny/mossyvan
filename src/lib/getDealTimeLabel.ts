import { Deal } from "@/types/deal";

export function getDealTimeLabel(deal: Deal): string {
  const now = new Date();

  // 날짜 정보가 아예 없으면
  if (!deal.start_date && !deal.end_date) {
    if (deal.category === "happyhour") return "Happy Hour";
    return "Ongoing";
  }

  // end_date 없으면 진행중
  if (!deal.end_date) {
    if (deal.category === "happyhour") return "Happy Hour";
    return "Ongoing";
  }

  const end = new Date(deal.end_date);
  if (Number.isNaN(end.getTime())) {
    if (deal.category === "happyhour") return "Happy Hour";
    return "Ongoing";
  }

  const diff = Math.ceil(
    (end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  // flashdeals 전용 문구
  if (deal.category === "flashdeals" && diff === 0) {
    return "Today only";
  }

  if (diff < 0) return "Expired";
  if (diff === 0) return "Ends today";

  return `${diff} days left`;
}
