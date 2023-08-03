import axios from "axios";
import * as url from "./urls";
import { ApiResponse } from "@/types/response";

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
