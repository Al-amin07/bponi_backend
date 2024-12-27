/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TReviews {
  rating: number;
  count: number;
}

export interface TItems {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  weight: string;
}

export interface TMenu {
  category: string;
  items: TItems[];
}
export interface TRestaurent {
  name: string;
  deliveryTime: string;
  reviews: TReviews;
  image: string;
  menu: TMenu[];
}

export interface TData {
  success: boolean;
  message: string;
  data: any;
}
