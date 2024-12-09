import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ProjectState {
  project: IProject | undefined;
}

const initialState: ProjectState = {
  project: undefined,
};

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    // Select
    selectProject: (state, action: PayloadAction<IProject>) => {
      if (action.payload.id.length === 0) {
        return;
      }

      state.project = action.payload;
    },
    // Reset
    reset: () => initialState,

    // Update
    updateProject: (state, action: PayloadAction<IProject>) => {
      if (!state.project || !action.payload) {
        return;
      }

      if (action.payload.id.length === 0) {
        return;
      }

      state.project = action.payload;
    },
  },
});

export const { selectProject, reset, updateProject } = projectSlice.actions;

export default projectSlice.reducer;
