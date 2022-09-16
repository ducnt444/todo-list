import { configureStore } from "@reduxjs/toolkit";
import filteredTasksReducer from "./redux/slices/filteredTasks";
import tasksReducer from "./redux/slices/tasks";
import miscReducer from "./redux/slices/misc";

export const store = configureStore({
  reducer: {
    filteredTasks: filteredTasksReducer,
    tasks: tasksReducer,
    misc: miscReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
