import { InputProps } from "./InputProps";

const Input = <T extends string | number>({
  value,
  className,
  ...rest
}: InputProps<T>) => {
  return (
    <div>
      <input
        className={`${className} w-full h-full border p-2 rounded-md`}
        value={value}
        {...rest}
      />
    </div>
  );
};

export default Input;
