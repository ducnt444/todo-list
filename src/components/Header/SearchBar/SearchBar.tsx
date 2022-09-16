import { useDispatch, useSelector } from "react-redux";
import { updatefilteredTasks } from "../../../redux/slices/filteredTasks";
import { updateSearchKeyword } from "../../../redux/slices/misc";
import { RootState } from "../../../store";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
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
    dispatch(updateSearchKeyword(e.target.value));
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
