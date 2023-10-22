import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetProductsApiResponse } from "../redux/ProductsReducer";

export class ProductsRepository {
  static getAllProducts(): Promise<AxiosResponse<GetProductsApiResponse>> {
    const request: AxiosRequestConfig = {
      url: "https://dummyjson.com/products?limit=0",
      method: "GET",
    };
    return axios.request(request);
  }
  // static getProductById(
  //   id: string
  // ): Promise<AxiosResponse<GetProductApiResponse>> {
  //   const request: AxiosRequestConfig = {
  //     url: `https://dummyjson.com/products/${id}`,
  //     method: "GET",
  //   };
  //   return axios.request(request);
  // }
}
