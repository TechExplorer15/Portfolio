import { useRef } from "react";

const Magnetic = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-300"
    >
      {children}
    </div>
  );
};

export default Magnetic;
