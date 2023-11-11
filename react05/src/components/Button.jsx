import React from "react";
const Button = (props, ref) => {
  return (
    <div>
      <button ref={ref}>Click me</button>
    </div>
  );
};
export default React.forwardRef(Button); // forwardRef => Chuyển tiếp Ref, muốn tham chiếu đến điều kiên khác
