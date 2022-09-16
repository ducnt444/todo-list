import styles from "./TaskConfirmButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask, updateTask } from "../../../redux/slices/tasks";
import { Task } from "../../../types";
import {
  toggleToast,
  updateErrorDuedate,
  updateErrorTitle,
} from "../../../redux/slices/misc";
import { RootState } from "../../../store";
import { v4 as uuidv4 } from "uuid";
import { isPast, isToday } from "date-fns";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

type TaskConfirmButtonProps = {
  taskData: Task;
  type: "add" | "edit";
};

const TaskConfirmButton = ({ taskData, type }: TaskConfirmButtonProps) => {
  const dispatch = useDispatch();
  const toast = useSelector((state: RootState) => state.misc.toast);

  const toggle = () => {
    dispatch(toggleToast());
    setTimeout(() => {
      dispatch(toggleToast());
    }, 1750);
  };

  const validateTitle = () => {
    if (!taskData.title) dispatch(updateErrorTitle(true));
    else {
      dispatch(updateErrorTitle(false));
      return true;
    }
  };

  const validateDueDate = () => {
    const date = new Date(taskData.due_date);
    if (isPast(date) && !isToday(date)) dispatch(updateErrorDuedate(true));
    else {
      dispatch(updateErrorDuedate(false));
      return true;
    }
  };

  const handleConfirm = () => {
    validateTitle();
    validateDueDate();
    if (!validateTitle() || !validateDueDate()) return;

    if (type === "add" && !toast) {
      dispatch(addNewTask({ ...taskData, id: uuidv4() }));
      toggle();
    } else {
      dispatch(updateTask(taskData));
      toggle();
    }
  };

  const toastClasses = cx({
    taskConfirmToast: true,
    show: toast,
  });

  return (
    <>
      <button
        className={styles.taskConfirmButton}
        onClick={handleConfirm}
        disabled={toast}
      >
        {type === "add" ? "Add" : "Update"}
      </button>
      <div className={toastClasses}>
        {type === "add" ? "Added successfully" : "Updated successfully"}
      </div>
    </>
  );
};

export default TaskConfirmButton;
