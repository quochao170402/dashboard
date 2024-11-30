import { InputProps } from "./InputProps";

const Input = <T extends string | number>({
  value,
  className,
  ...rest
}: InputProps<T>) => {
  return (
    <>
      <input
        className={`${className} w-full h-full border p-2 rounded-md`}
        value={value}
        {...rest}
      />
    </>
  );
};

export default Input;
