export type Variant = {
  price: number;
  stockStatus: string;
  code: string;
  type: string;
  color?: string;
  size?: string;
};

export type Product = {
  name: string;
  image?: string;
  price?: number;
  gallery?: string[];
  stockStatus: string;
  code: string;
  tags: string[];
  category: string;
  description: string;
  features: string[];
  variants: Variant[];
};
