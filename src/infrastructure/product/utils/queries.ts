import { PRODUCT_QUERY_KEYS } from '@/infrastructure/product/utils/keys';
import { productAPIClient } from '@/infrastructure/product/productAPIClient';

export const PRODUCT_QUERIES = {
  getProducts: {
    queryKey: PRODUCT_QUERY_KEYS.list(),
    queryFn: productAPIClient.getProducts,
  },
};
