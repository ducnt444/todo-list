import React from "react";

type Props = {
  handleRemove: () => void;
  className: string;
};

const ItemRemoveButton = ({ handleRemove, className }: Props) => {
  return (
    <button onClick={handleRemove} className={className}>
      Remove
    </button>
  );
};

export default ItemRemoveButton;
