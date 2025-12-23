export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/api/v1/products`,
  PRODUCT_BY_ID: (id: string) => `${API_BASE_URL}/api/v1/products/${id}`,
  FILTERS: `${API_BASE_URL}/api/v1/products/filters`,
} as const;

