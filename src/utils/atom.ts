import { atom } from "jotai";

/**
 * Define a global notification state
 */
export const globalNotif = atom({
  type: "",
  title: "",
  message: "",
});