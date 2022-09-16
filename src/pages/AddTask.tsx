import { TaskDetailsProps } from "../types";
import { format } from "date-fns";
import TaskDetails from "../components/TaskDetails/TaskDetails";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import HeaderButton from "../components/Header/AddTaskButton/HeaderButton";

type Props = {};

const AddTask = (props: Props) => {
  const addingDetailsProps: TaskDetailsProps = {
    id: "",
    title: "",
    description: "",
    due_date: format(new Date(), "yyyy-MM-dd"),
    priority: "normal",
    isShowing: true,
    type: "add",
  };

  return (
    <>
      <Header type={"add"} />

      <Link to="/">
        <HeaderButton type="back" />
      </Link>

      <TaskDetails {...addingDetailsProps} />
    </>
  );
};

export default AddTask;
