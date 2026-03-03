import useCursor from "../../hooks/useCursor";

const CursorGlow = () => {
  useCursor();

  return (
    <div className="cursor fixed w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />
  );
};

export default CursorGlow;
