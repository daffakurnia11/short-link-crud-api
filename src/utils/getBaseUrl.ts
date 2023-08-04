const IS_SERVER = typeof window === "undefined";

/**
 * Get URL String Function
 * @param path URL path as a string
 * @returns getURL function
 */
export default function getURL(path: string) {
  const baseURL = IS_SERVER
    ? process.env.NEXT_PUBLIC_SITE_URL!
    : window.location.origin;
  return new URL(path, baseURL).toString();
}
