import axios from "axios";
import * as url from "./urls";
import { ApiResponse } from "@/types/response";
import { RequestBodyType } from "@/types/request";

axios.defaults.baseURL = url.baseUrl;

/**
 * Short Link List API Function
 * @returns API Response Object
 */
export async function ListApi() {
  return await axios
    .get(url.listUrl)
    .then((response: ApiResponse) => {
      return response;
    })
    .catch((error: any) => {
      return error.response;
    });
}

/**
 * Short Link Create API Function
 * @param data Parsing request body from create form
 * @returns API Response Object
 */
export async function CreateApi(data: RequestBodyType) {
  return await axios
    .post(url.listUrl, data)
    .then((response: ApiResponse) => {
      return response;
    })
    .catch((error: any) => {
      return error.response;
    });
}
