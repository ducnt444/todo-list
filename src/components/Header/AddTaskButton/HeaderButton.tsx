import styles from "./HeaderButton.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

type Props = { type: "add" | "back" };

const HeaderButton = ({ type }: Props) => {
  const classes = cx({
    addButton: type === "add",
    backButton: type === "back",
    headerButton: true
  });

  return (
    <button className={classes}>{type === "add" ? "Add task" : "Back"}</button>
  );
};

export default HeaderButton;
