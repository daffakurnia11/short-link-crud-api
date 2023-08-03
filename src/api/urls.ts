/**
 * API Base URL 
 */
export const baseUrl: string = process.env.NEXT_PUBLIC_API_URL!

/**
 * List of Short Link API endpoint
 */
export const listUrl: string = `/short-link/`

/**
 * Detail of Short Link API endpoint
 * @param custom Parsing the unique data
 */
export const detailUrl: Function = (custom: string) => `/short-link/${custom}/`