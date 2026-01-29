export type DealCategory = "alldeals" | "happyhour" | "flashdeals" | "weeklyspecials";

export interface Deal {
  id: string;
  user_id: string | null;

  title: string;
  description: string | null;

  category: DealCategory;
  type: string; // grocery/restaurant/coffee 등

  price: number | null;
  original_price: number | null;
  discount_label: string | null;

  image_url: string | null;
  location: string | null;

  tags: string[] | null;

  start_date: string | null;
  end_date: string | null;

  created_at: string;
  updated_at: string;
}
