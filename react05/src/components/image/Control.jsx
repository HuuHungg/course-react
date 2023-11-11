import React from "react";
import Image from "./Image";
import { useRef } from "react";
import { useEffect } from "react";

const Control = () => {
  const imageRef = useRef();
  useEffect(() => {
    console.dir(imageRef.current);
    // imageRef.current.remove();
  }, []);
  const handleZoomIn = () => {
    imageRef.current.zoomIn();
  };
  const handleZoomOut = () => {
    imageRef.current.zoomOut();
  };

  return (
    <div>
      <Image ref={imageRef} />
      <button onClick={handleZoomIn}>ZoomIn</button>
      <button onClick={handleZoomOut}>Zoomout</button>
    </div>
  );
};

export default Control;

// Xây dựng 1 ref chỉ cho phép component cha sử dụng các phương thức của Dom mà nó cho phép
