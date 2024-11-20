import InputProps from "./InputProps";

const Input = ({ value, onChange, className, ...rest }: InputProps) => {
  return (
    <div>
      <input
        className={`${className} w-full h-full border p-2 rounded-md`}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
