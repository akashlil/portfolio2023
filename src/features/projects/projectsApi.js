import { apiSlice } from "../api/apiSlice";

const projectApi = apiSlice.injectEndpoints({
  endpoints: (bulider) => ({
    getProdects: bulider.query({
      query: () => ({
        url: "/jobs",
      }),
    }),
  }),
});

export const { useGetProdectsQuery } = projectApi;
