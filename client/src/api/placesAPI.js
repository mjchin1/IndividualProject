// Import createApi (function to create an API service) and fetchBaseQuery (a basic fetch wrapper)
// from Redux Toolkit Query's React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const placesApi = createApi({
  // Unique string used in constructing Redux action types, state selectors, and React hook names
  reducerPath: "placesApi",
  // Define a base query function that all endpoints will use as the base of their request
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8080/api",
    baseUrl: "/api",
    prepareHeaders(headers) {
      headers.set("Content-type", "application/json");
      return headers;
    },
    // The base URL for all requests
  }),
  // Define endpoints for our API service
  endpoints: (builder) => ({
    // Define an endpoint that fetches players
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
    // The part of the URL that comes after the baseUrl for this specific endpoint
  }),
});

// Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query
export const {
  useFetchPlacesQuery,
  useFetchSinglePlaceQuery,
  useAddPlaceMutation,
} = placesApi;
