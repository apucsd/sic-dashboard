import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "../../utils/utils";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.10.18:5001/api/v1",
    credentials: "include",
    prepareHeaders: (header) => {
      const token = getAccessToken();

      if (token) {
        header.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ["Faq", "User", "Privacy-Policy"],
  endpoints: () => ({}),
});
