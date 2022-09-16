import { useState } from "react";
import { useDispatch } from "react-redux";
import { togglePopup, updateSingleDeletingId } from "../../redux/slices/misc";
import { Task } from "../../types";
import TaskDetails from "../TaskDetails/TaskDetails";
import ItemChecker from "./ItemChecker/ItemChecker";
import ItemDetailButton from "./ItemDetailButton";
import ItemRemoveButton from "./ItemRemoveButton";
import styles from "./TaskItem.module.scss";

const TaskItem = (props: Task) => {
  const dispatch = useDispatch();
  const { title, id } = props;
  const [isShowing, setIsShowing] = useState(false);

  const handleRemove = () => {
    dispatch(togglePopup("single"));
    dispatch(updateSingleDeletingId(props.id));
  };

  return (
    <>
      <div className={styles.taskItem}>
        <div className={styles.taskContent}>
          <ItemChecker id={id} />
          <span className={styles.title}>{title}</span>
        </div>

        <div className={styles.taskButtons}>
          <ItemDetailButton
            setIsShowing={() => setIsShowing(!isShowing)}
            className={styles.detailButton}
          />
          <ItemRemoveButton
            handleRemove={handleRemove}
            className={styles.removeButton}
          />
        </div>
      </div>
      <TaskDetails {...props} isShowing={isShowing} type={"edit"} />
    </>
  );
};

export default TaskItem;
