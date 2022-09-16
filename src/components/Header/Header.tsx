type Props = { type: "home" | "add" };

const Header = ({ type }: Props) => {
  return <h1>{type === "home" ? "Todo List" : "Add New Task"}</h1>;
};

export default Header;
