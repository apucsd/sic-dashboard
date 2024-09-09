import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAdmin: build.query({
      query: () => ({
        url: "/users/admins",
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),
    addAdmin: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Admin"],
    }),
    // updateAdmin: build.mutation({
    //   query: (args) => {
    //     return {
    //       url: `/users/admins/${args.id}`,
    //       method: "PATCH",
    //       body: args.data,
    //     };
    //   },
    //   invalidatesTags: ["Admin"],
    // }),
    // deleteAdmin: build.mutation({
    //   query: (id) => {
    //     return {
    //       url: `/users/admins/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    //   invalidatesTags: ["Admin"],
    // }),
  }),
});

export const { useGetFeedBackQuery, useGetAdminQuery, useAddAdminMutation } =
  adminApi;
