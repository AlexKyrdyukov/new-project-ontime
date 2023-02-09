import axiosInstance from './axios';

export type ProductsType = {
  products: ProductType[];
  total: string;
  skip: string;
  limit: string;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const getDevices = async (skip: string, limit: string) => {
  const response = await axiosInstance.get<ProductsType>('', { params: { limit, skip } });
  return response.data;
};

const getById = async (deviceId?: number | undefined) => {
  const response = await axiosInstance.get<ProductType>(`/${deviceId}`);
  return response.data;
};

export default {
  getDevices,
  getById,
};
