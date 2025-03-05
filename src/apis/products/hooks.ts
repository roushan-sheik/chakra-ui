import { useSuspenseQuery } from '@tanstack/react-query';
import { PRODUCT_QUERIES } from '@/apis/products/queries';

export const useProductService = () => {
  const useGetProduct = () => {
    return useSuspenseQuery(PRODUCT_QUERIES.getProducts);
  };
  return {
    useGetProduct,
  };
};
