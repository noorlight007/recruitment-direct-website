/**
 * Custom API Client Service for Recruitment Direct
 * Exposes a standardized `api` object with a `.get()` method.
 */

const getBaseUrl = (): string => {
  if (typeof window !== "undefined") {
    // Client-side environment
    return process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.callpilot.pro/api/v1";
  }
  // Server-side environment
  return process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.callpilot.pro/api/v1";
};

export const api = {
  /**
   * Performs an HTTP GET request to the specified endpoint relative to the Base URL.
   * @param endpoint - The endpoint path (e.g. "/core/live/jobs")
   * @returns Promise containing the JSON response.
   */
  get: async <T = any>(endpoint: string): Promise<T> => {
    const baseUrl = getBaseUrl();
    const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    const url = `${baseUrl}${cleanEndpoint}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        // Enable Next.js incremental static regeneration / revalidation caching if applicable
        next: { revalidate: 60 },
      });

      if (!response.ok) {
        throw new Error(`API HTTP request failed with status: ${response.status}`);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      console.error(`[API Client Error] Failed fetching ${url}:`, error);
      throw error;
    }
  },

  /**
   * Performs an HTTP POST request to the specified endpoint with a JSON body.
   * @param endpoint - The endpoint path (e.g. "/core/live/ai-hire-now")
   * @param body - The JSON payload to send
   * @returns Promise containing the JSON response.
   */
  post: async <T = any>(endpoint: string, body: any): Promise<T> => {
    const baseUrl = getBaseUrl();
    const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    const url = `${baseUrl}${cleanEndpoint}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return data as T;
    } catch (error) {
      console.error(`[API Client Error] Failed posting to ${url}:`, error);
      throw error;
    }
  },
};
