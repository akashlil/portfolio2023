import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jobbox-server-akashlil.vercel.app",
  }),
  endpoints: (bulider) => ({}),
});
