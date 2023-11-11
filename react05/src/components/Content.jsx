import { memo } from "react";
const Content = () => {
  console.log("Content Render");
  return (
    <div>
      <h2>Thi is content</h2>
    </div>
  );
};

export default memo(Content);

// Higher Order Component => Component cấp cao hơn Component hiện tại (Bọc Component)
// React.memo()
// Hoc
