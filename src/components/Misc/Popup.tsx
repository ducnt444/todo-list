import styles from "./Popup.module.scss";
import className from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  clearDeletingIds,
  togglePopup,
  updateSingleDeletingId,
} from "../../redux/slices/misc";
import { removeTask } from "../../redux/slices/tasks";

function Popup() {
  const dispatch = useDispatch();
  const { popup, popupType } = useSelector((state: RootState) => state.misc);
  const { deletingIds, singleDeletingId } = useSelector(
    (state: RootState) => state.misc
  );

  const handleYesButton = () => {
    if (popupType === "bulk") {
      dispatch(removeTask(deletingIds));
      dispatch(clearDeletingIds());
    } else dispatch(removeTask(singleDeletingId));

    dispatch(togglePopup("single"));
  };

  const handleNoButton = () => {
    singleDeletingId && dispatch(updateSingleDeletingId(""));
    dispatch(togglePopup("single"));
  };

  return popup ? (
    <div className={className("flex-center", styles.popupWrapper)}>
      <div className={styles.popup}>
        <h3>Confirmation</h3>
        <p>Delete this task?</p>
        <div>
          <button className={styles.yesButton} onClick={handleYesButton}>
            Yes
          </button>
          <button className={styles.nobuton} onClick={handleNoButton}>
            No
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;
