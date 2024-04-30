import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const placesApi = createApi({
  reducerPath: "placesApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8080/api/",
    baseUrl: "https://thefieldtrip-backend.onrender.com/api",
    prepareHeaders(headers) {
      headers.set("Content-type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchPlaces: builder.query({
      query: () => "/places",
      providesTags: ["Place"],
    }),
    fetchSinglePlace: builder.query({
      query: (id) => `/places/${id}`,
    }),
    addPlace: builder.mutation({
      query: (body) => ({
        url: "places",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Place"],
    }),

    deletePlace: builder.mutation({
      query: (id) => ({
        url: `places/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Place"],
    }),
  }),
});

export const {
  useFetchPlacesQuery,
  useFetchSinglePlaceQuery,
  useAddPlaceMutation,
  useDeletePlaceMutation,
} = placesApi;
