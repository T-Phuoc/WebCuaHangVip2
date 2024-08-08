export interface Product {
  name: string;
  id: number;
  price: number;
  description: string;
  inStock: number;
  imageUrl: string;
  quantity?: number;
}
