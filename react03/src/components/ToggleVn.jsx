import { ConvertContext } from "./Convert";
import { useContext } from "react";

const ToggleVn = () => {
  const { data, dispatch } = useContext(ConvertContext); // Sử dụng destructuring để truyền vào

  return (
    <div>
      VND:{" "}
      <input
        type="number"
        placeholder="Vnd..."
        value={data.vnd}
        onInput={(e) => {
          dispatch({
            type: "vnd",
            payload: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default ToggleVn;
