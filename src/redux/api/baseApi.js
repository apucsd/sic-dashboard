import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "../../utils/utils";
import { toast } from "sonner";

// Define a service using a base URL and expected endpoints

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.10.18:5010/api/v1",
  credentials: "include",
  prepareHeaders: (header) => {
    const token = getAccessToken();

    if (token) {
      header.set("Authorization", `Bearer ${token}`);
    }
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    toast.error(result.error.data.message);
  }
  if (result?.error?.status === 403) {
    toast.error(result.error.data.message);
  }
  if (result?.error?.status === 409) {
    toast.error(result.error.data.message);
  }
  if (result?.error?.status === 401) {
    //* Send Refresh
    console.log("Sending refresh token");

    const res = await fetch(
      "http://192.168.10.18:5001/api/v1/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (data?.data?.accessToken) {
      localStorage.setItem("accessToken", data.data.accessToken);
      result = await baseQuery(args, api, extraOptions);
    } else {
      localStorage.removeItem("accessToken");
      window.location.replace("/login");
    }
  }
  // console.log(result);
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    "Faq",
    "User",
    "Privacy-Policy",
    "Terms",
    "GuideLine",
    "About",
    "Category",
    "Book",
    "Donation",
    "Feedback",
    "Admin",
    "User",
    "Dashboard",
    "Donor",
  ],
  endpoints: () => ({}),
});
