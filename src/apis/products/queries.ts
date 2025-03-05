import { PRODUCT_QUERY_KEYS } from '@/apis/products/keys';
import { getProducts } from '@/apis/products/index';

export const PRODUCT_QUERIES = {
  getProducts: {
    queryKey: PRODUCT_QUERY_KEYS.list(),
    queryFn: getProducts,
  },
};
