import useTheme from "@/hooks/useTheme";

const Task = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    console.log("object :>> ", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="w-full h-full flex flex-col gap-4 items-end">
      <button className="p-2 rounded-md w-24 bg-gray-100" onClick={handleClick}>
        Toggle theme: {theme}
      </button>
    </div>
  );
};

export default Task;
