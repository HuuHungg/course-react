import { useContext } from "react";
import { ConvertContext } from "./Convert";

const ToggleUsd = () => {
  const { data, dispatch } = useContext(ConvertContext); // Sử dụng destructuring để truyền vào
  return (
    <div>
      USD:{" "}
      <input
        type="number"
        placeholder="Usd..."
        value={data.usd}
        onInput={(e) => {
          dispatch({
            type: "usd",
            payload: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default ToggleUsd;
