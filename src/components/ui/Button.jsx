import Magnetic from "./Magnetic";

const Button = ({ children }) => {
  return (
    <Magnetic>
      <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 rounded-full font-medium tracking-wide hover:scale-105">
        {children}
      </button>
    </Magnetic>
  );
};

export default Button;
