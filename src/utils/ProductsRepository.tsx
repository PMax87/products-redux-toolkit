import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetProductsApiResponse } from "../redux/ProductReducer";

export class ProductsRepository {
  static getProducts(): Promise<
    AxiosResponse<{ products: GetProductsApiResponse[] }>
  > {
    const request: AxiosRequestConfig = {
      url: "https://dummyjson.com/products?limit=10&skip=10",
      method: "GET",
    };
    return axios.request(request);
  }
}
