export interface Product {
  id: string;
  image: string;
  rating: { rate: string };
  price: string;
  title: string;
  description: string;
}

export interface Products {
  product: Product;
}
