import React from "react";

type Props = {
  setIsShowing: () => void;
  className: string;
};

const ItemDetailButton = ({ setIsShowing, className }: Props) => {
  return (
    <button onClick={setIsShowing} className={className}>
      Detail
    </button>
  );
};

export default ItemDetailButton;
