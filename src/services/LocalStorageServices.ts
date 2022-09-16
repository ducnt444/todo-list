import { TODO_LOCAL_KEY } from "../constants";
import { INITIAL_TASKS } from "../data/tasks";

export const setInitialTasks = () => {
  if (!localStorage.getItem(TODO_LOCAL_KEY))
    localStorage.setItem(TODO_LOCAL_KEY, JSON.stringify(INITIAL_TASKS));
};

export const getTasksLocal = () => {
  setInitialTasks();
  const storage = localStorage.getItem(TODO_LOCAL_KEY);
  return storage ? JSON.parse(storage) : [];
};
