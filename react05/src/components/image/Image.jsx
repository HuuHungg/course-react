import React, { forwardRef, useImperativeHandle, useRef } from "react";
const Image = (props, ref) => {
  const imageRef = useRef();
  // Thông qua 1 bộ lọc -> tạo lại ref
  useImperativeHandle(ref, () => {
    return {
      zoomIn: () => {
        imageRef.current.style.width = "300px";
      },
      zoomOut: () => {
        imageRef.current.style.width = "";
      },
    };
  });
  return (
    <div>
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1699484174858-1fd6c24944c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default forwardRef(Image);
