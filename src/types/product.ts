export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: string;
  reviews: number;
  rating: number | null;
  image: string;
  isAdded: boolean;
  count: number;
  wishlists: string[];
};

export type Category = {
  id: number;
  category: string;
  subCategories: Array<{
    name: string;
    link: string;
  }>;
};

export type BrandName = string[];
export type Brand = {
  id: number;
  brandName: BrandName;
};
