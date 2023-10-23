import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetProductsApiResponse } from "../redux/ProductsReducer";
import { SingleProduct } from "../redux/SingleProductReducer";

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
  static getProductsPerPage(skip: number): Promise<AxiosRequestConfig<GetProductsApiResponse>> {
    const request: AxiosRequestConfig = {
      url: `https://dummyjson.com/products?limit=10&skip=${skip}`,
      method: "GET",
    }
    return axios.request(request)
  } 
}
