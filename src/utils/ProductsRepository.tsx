import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetProductsApiResponse } from "../redux/ProductsReducer";
import { SingleProduct } from "../redux/SingleProductReducer";
import {
  GetCategoriesFromApi,
  GetDataFromApi,
} from "../redux/FilterProductsReducer";

export class ProductsRepository {
  static getAllProducts(): Promise<AxiosResponse<GetProductsApiResponse>> {
    const request: AxiosRequestConfig = {
      url: "https://dummyjson.com/products?limit=0",
      method: "GET",
    };
    return axios.request(request);
  }
  static getProductById(id: string): Promise<AxiosResponse<SingleProduct>> {
    const request: AxiosRequestConfig = {
      url: `https://dummyjson.com/products/${id}`,
      method: "GET",
    };
    return axios.request(request);
  }
  static getProductsPerPage(
    skip: number,
    limit: number
  ): Promise<AxiosRequestConfig<GetDataFromApi>> {
    const request: AxiosRequestConfig = {
      url: `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      method: "GET",
    };
    return axios.request(request);
  }
  static getCategories(): Promise<AxiosResponse<string[]>> {
    const request: AxiosRequestConfig = {
      url: "https://dummyjson.com/products/categories",
      method: "GET",
    };
    return axios.request(request);
  }
  static getProductsOfACategory(
    category: string
  ): Promise<AxiosResponse<GetProductsApiResponse>> {
    const request: AxiosRequestConfig = {
      url: `https://dummyjson.com/products/category/${category}`,
      method: "GET",
    };
    return axios.request(request);
  }
}
