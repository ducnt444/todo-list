import { useDispatch, useSelector } from "react-redux";
import { addDeletingIds, removeDeletingIds } from "../../../redux/slices/misc";
import { RootState } from "../../../store";

type Props = { id: string };

const ItemChecker = ({ id }: Props) => {
  const dispatch = useDispatch();
  const deletingIds = useSelector((state: RootState) => state.misc.deletingIds);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) dispatch(addDeletingIds(id));
    else dispatch(removeDeletingIds(id));
  };

  return (
    <>
      <input
        type={"checkbox"}
        onChange={handleChange}
        checked={deletingIds.includes(id)}
      />
    </>
  );
};

export default ItemChecker;
