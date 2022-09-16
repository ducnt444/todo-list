import { Task } from "../types";
import { v4 as uuidv4 } from "uuid";

export const INITIAL_TASKS: Task[] = [
  {
    id: uuidv4(),
    title: "Do homework",
    description: "Do homework lorem ipsum",
    due_date: "2022-11-06",
    priority: "normal",
  },
  {
    id: uuidv4(),
    title: "Learn something",
    description: "Learn something lorem ipsum",
    due_date: "2022-10-18",
    priority: "high",
  },
];
