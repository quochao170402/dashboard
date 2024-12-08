import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./ProjectSlice";

// Create the store
const store = configureStore({
  reducer: {
    project: projectReducer, // Add project slice
  },
});

// Export RootState and AppDispatch for TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
