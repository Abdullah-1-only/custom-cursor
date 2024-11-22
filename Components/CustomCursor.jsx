"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
            top: `${cursor.y}px`,
            left: `${cursor.x}px`,
            transition: "transform 1s cubic-bezier(0.19, 1, 0.22, 1)"
        }}
        className="absolute z-50 h-5 w-5 bg-black rounded-full -translate-x-1/2 -translate-y-1/2"
      ></div>
    </>
  );
};

export default CustomCursor;
