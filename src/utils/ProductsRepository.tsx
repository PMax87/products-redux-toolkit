import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetProductsApiResponse } from "../redux/ProductReducer";

export class ProductsRepository {
  static getAllProducts(): Promise<AxiosResponse<GetProductsApiResponse>> {
    const request: AxiosRequestConfig = {
      url: "https://dummyjson.com/products?limit=0",
      method: "GET",
    };
    return axios.request(request);
  }
}
