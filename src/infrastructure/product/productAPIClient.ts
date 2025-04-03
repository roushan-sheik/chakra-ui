import type { ProductResponse } from '@/infrastructure/product/utils/types';
import delay from '../../utils/function/delay';
import { mockProducts } from './mock-products';

class ProductAPIClient {
  private readonly headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  private readonly apiUrl = 'http://localhost:3000';

  public async getProducts(): Promise<ProductResponse> {
    await delay(1000);
    return mockProducts;
  }
}

export const productAPIClient = new ProductAPIClient();
