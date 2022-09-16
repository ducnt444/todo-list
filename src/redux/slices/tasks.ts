import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getTasksLocal } from "../../services/LocalStorageServices";
import { Task } from "../../types";

type TasksListState = Task[];

const initialState: TasksListState = getTasksLocal();

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string[] | string>) => {
      return state.filter((eachTask) => {
        if (Array.isArray(action.payload))
          return !action.payload.includes(eachTask.id);
        return action.payload !== eachTask.id;
      });
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      return state.map((eachTask) =>
        eachTask.id === action.payload.id ? action.payload : eachTask
      );
    },
  },
});

export const { addNewTask, removeTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
