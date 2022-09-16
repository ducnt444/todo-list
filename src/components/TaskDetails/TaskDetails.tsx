import { Task, TaskDetailsProps } from "../../types";
import TaskConfirmButton from "./TaskConfirmButton/TaskConfirmButton";
import styles from "./TaskDetails.module.scss";
import { useState } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const TaskDetails = (props: TaskDetailsProps) => {
  const { title, description, isShowing, type, priority, due_date, id } = props;
  const { errorTitle, errorDuedate } = useSelector(
    (state: RootState) => state.misc
  );

  const [taskData, setTaskData] = useState<Task>({
    id,
    title,
    description,
    due_date,
    priority,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTaskData({
      ...taskData,
      priority: e.target.value,
    });
  };

  const classes = cx({
    taskDetails: true,
    adding: type === "add",
  });

  return isShowing ? (
    <div className={classes}>
      <input
        type="text"
        name="title"
        placeholder="Task title ..."
        defaultValue={title}
        className={styles.taskTitle}
        onChange={handleChange}
      />
      <p className={styles.errorText}>
        {errorTitle && "Task title is required"}
      </p>

      <div>
        <h3>Description</h3>
        <textarea
          name="description"
          placeholder="Task description ..."
          defaultValue={description}
          className={styles.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className={styles.selections}>
        <div>
          <h3>Due Date</h3>
          <input
            type="date"
            name="due_date"
            defaultValue={due_date}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Priority</h3>
          <select defaultValue={priority} onChange={handleSelect}>
            <option value={"low"}>Low</option>
            <option value={"normal"}>Normal</option>
            <option value={"high"}>High</option>
          </select>
        </div>
      </div>
      <p className={styles.errorText}>
        {errorDuedate && "Dates in the past cannot be selected"}
      </p>

      <TaskConfirmButton type={type} taskData={taskData} />
    </div>
  ) : null;
};

export default TaskDetails;
