// Higher Order Component ==> Thay đổi màu chữ ngẫu nhiên
export const color = (ParentComponent) => {
  // Tạo 1 component mới
  const Component = (props) => {
    const color =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
    return (
      <div style={{ color }}>
        <ParentComponent {...props} />
      </div>
    );
  };
  return Component;
};
// Tạo ra 1 hàm nhận vào 1 component => Trả về 1 hàm con. Trong hàm đó sẽ trả về component ban đầu
// Ôn lại kiến thức clousure
