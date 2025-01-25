import React from "react";

const RButton = ({ btnText, btnStyle }) => {
  return (
    <button
      className={`${btnStyle} px-3 py-1 hover:shadow-md hover:shadow-black/30 duration-300 transition-all ease-linear`}
    >
      {btnText}
    </button>
  );
};

export default RButton;
