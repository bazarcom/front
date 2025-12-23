import { Price } from './price';

export type Product = {
  _id: string;
  name: string;
  price: number | null;
  old_price: number | null;
  image_url: string;
  market_name: string;
  category: string;
  prices?: Price[];
};
