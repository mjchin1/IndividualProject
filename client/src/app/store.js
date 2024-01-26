import { configureStore } from "@reduxjs/toolkit";

import { placesApi } from "../api/placesAPI";

export const store = configureStore({
  reducer: {
    [placesApi.reducerPath]: placesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(placesApi.middleware),
});
