import CardProps from "./CardProps";

const Card = ({
  title,
  className,
  children,
  isShowTitle = true,
}: CardProps) => {
  return (
    <div
      className={`${className} p-4 shadow-xl rounded-md transition-all duration-300 ease-in-out border w-full h-fit`}
      //   style={{ width, height }}
    >
      {isShowTitle && (
        <h2 className="font-bold text-gray-900 text-2xl sm:truncate sm:tracking-tight">
          {title}
        </h2>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;
