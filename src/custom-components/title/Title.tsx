interface Props {
  title: string;
  className?: string;
}

const Title = ({ className, title }: Props) => {
  return (
    <h2
      className={`font-bold text-gray-900 text-2xl sm:truncate sm:tracking-tight ${className}`}
    >
      {title}
    </h2>
  );
};

export default Title;
