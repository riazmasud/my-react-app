import React from "react";

const Input = ({ placeholder, style, onKeyDown }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      placeholder={placeholder}
      style={style}
      onKeyDown={onKeyDown}
    ></input>
  );
};

const ForwardedInput = React.forwardRef(Input);

export default ForwardedInput;
