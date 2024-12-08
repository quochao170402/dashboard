import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the project state interface
interface ProjectState {
  selectedProject: string | null; // ID of the selected project
  projectList: { id: string; name: string }[]; // Optional: List of projects
}

// Initial state
const initialState: ProjectState = {
  selectedProject: null,
  projectList: [], // Optional: preloaded or fetched later
};

// Create the slice
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // Set the currently selected project
    setSelectedProject(state, action: PayloadAction<string | null>) {
      state.selectedProject = action.payload;
    },
    // Optional: Load a list of projects
    setProjectList(
      state,
      action: PayloadAction<{ id: string; name: string }[]>
    ) {
      state.projectList = action.payload;
    },
  },
});

// Export actions
export const { setSelectedProject, setProjectList } = projectSlice.actions;

// Export the reducer
export default projectSlice.reducer;
