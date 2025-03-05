import type { ProductResponse } from '@/apis/products/types';
import delay from '@/utils/delay';
import mockProducts from './mock-products.json';

const BASE_URL = 'http://localhost:3000';

export const getProducts = async (): Promise<ProductResponse> => {
  // const response = await fetch(`${BASE_URL}/data/products.json`);

  // return response.json();
  await delay(1000);
  return mockProducts;
};
