import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/ProjectSlice";

// Create the store
const projectStore = configureStore({
  reducer: {
    project: projectReducer, // Add project slice
  },
});

// Export RootState and AppDispatch for TypeScript support
export type RootState = ReturnType<typeof projectStore.getState>;
export type AppDispatch = typeof projectStore.dispatch;

export default projectStore;
