import { useEffect } from "react";

const useCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);
};

export default useCursor;
