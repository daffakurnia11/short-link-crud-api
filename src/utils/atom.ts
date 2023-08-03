import { atom } from "jotai";

/**
 * Define a global notification state
 */
export const globalNotif: any = atom({
  type: "",
  title: "",
  message: "",
});