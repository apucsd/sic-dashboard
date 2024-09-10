import { baseApi } from "./baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDashboardMatrix: build.query({
      query: () => ({
        url: "/dashboard/metrics",
        method: "GET",
      }),
      providesTags: ["Dashboard"],
    }),
    getUserStats: build.query({
      query: () => ({
        url: "/dashboard/user-count/2024",
        method: "GET",
      }),
      providesTags: ["Dashboard"],
    }),
  }),
});

export const { useGetDashboardMatrixQuery, useGetUserStatsQuery } =
  dashboardApi;
