import { apiSlice } from "../api/apiSlice";

const projectApi = apiSlice.injectEndpoints({
  endpoints: (bulider) => ({
    getProdects: bulider.query({
      query: () => ({
        url: "",
      }),
    }),
  }),
});

export const { useGetProdectsQuery } = projectApi;
