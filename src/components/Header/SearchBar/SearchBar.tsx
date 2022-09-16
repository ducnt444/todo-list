import { useDispatch, useSelector } from "react-redux";
import { updatefilteredTasks } from "../../../redux/slices/filteredTasks";
import { RootState } from "../../../store";
import styles from "./SearchBar.module.scss";

type Props = {};

const SearchBar = (props: Props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredTask = tasks.filter((task) => {
      return (
        e.target.value !== "" &&
        task.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    dispatch(updatefilteredTasks(filteredTask));
  };

  return (
    <input
      type={"text"}
      placeholder="Search ..."
      className={styles.searchBar}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
