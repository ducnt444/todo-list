import TaskItem from "../components/TaskItem/TaskItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TODO_LOCAL_KEY } from "../constants";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/AddTaskButton/HeaderButton";
import SearchBar from "../components/Header/SearchBar/SearchBar";
import BulkAction from "../components/Header/BulkAction/BulkAction";
import { Task } from "../types";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const filteredTasks = useSelector((state: RootState) => state.filteredTasks);

  const sortTasks = (tasks: Task[]) =>
    tasks.slice().sort((a, b) => a.due_date.localeCompare(b.due_date));

  const [renderTasks, setRenderTasks] = useState(
    filteredTasks.length > 0 ? sortTasks(filteredTasks) : sortTasks(tasks)
  );

  useEffect(() => {
    localStorage.setItem(TODO_LOCAL_KEY, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    setRenderTasks(
      filteredTasks.length > 0 ? sortTasks(filteredTasks) : sortTasks(tasks)
    );
  }, [tasks, filteredTasks]);

  return (
    <div>
      <Header type={"home"} />

      <Link to="/add">
        <HeaderButton type="add" />
      </Link>

      <SearchBar />

      <BulkAction />

      {renderTasks.map((task: any, index: number) => (
        <TaskItem key={index} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
