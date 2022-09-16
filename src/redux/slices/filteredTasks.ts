import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";

type TasksListState = Task[];

const initialState: TasksListState = [];

export const tasksSlice = createSlice({
  name: "filteredTasks",
  initialState,
  reducers: {
    updatefilteredTasks: (state, action: PayloadAction<Task[]>) => {
      return state = action.payload;
    },
  },
});

export const { updatefilteredTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
