import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../../../redux/slices/misc";
import { RootState } from "../../../store";
import styles from "./BulkAction.module.scss";

type Props = {};

const BulkAction = (props: Props) => {
  const dispatch = useDispatch();
  const deletingIds = useSelector((state: RootState) => state.misc.deletingIds);

  const handleBulkRemove = () => {
    dispatch(togglePopup("bulk"));
  };

  return deletingIds.length > 0 ? (
    <div className={styles.bulkAction}>
      <span>Bulk Action:</span>
      <div>
        <button className={styles.bulkDone}>Done</button>
        <button className={styles.bulkRemove} onClick={handleBulkRemove}>
          Remove
        </button>
      </div>
    </div>
  ) : null;
};

export default BulkAction;
