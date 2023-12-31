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
 * Short Link Retrieve API Function
 * @returns API Response Object
 */
export async function RetrieveApi(custom: string) {
  return await axios
    .get(url.detailUrl(custom))
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


/**
 * Short Link Update API Function
 * @returns API Response Object
 */
export async function UpdateApi(custom: string, data: RequestBodyType) {
  return await axios
    .patch(url.detailUrl(custom), data)
    .then((response: ApiResponse) => {
      return response;
    })
    .catch((error: any) => {
      return error.response;
    });
}

/**
 * Short Link Delete API Function
 * @param data Parsing foreign key data
 * @returns API Response Object
 */
export async function DeleteApi(custom: string) {
  return await axios
    .delete(url.detailUrl(custom))
    .then((response: ApiResponse) => {
      return response;
    })
    .catch((error: any) => {
      return error.response;
    });
}
