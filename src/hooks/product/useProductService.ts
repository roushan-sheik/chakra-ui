import { useSuspenseQuery } from '@tanstack/react-query';
import { PRODUCT_QUERIES } from '@/infrastructure/product/utils/queries';

export const useProductService = () => {
  const useGetProduct = () => {
    return useSuspenseQuery(PRODUCT_QUERIES.getProducts);
  };
  return {
    useGetProduct,
  };
};
