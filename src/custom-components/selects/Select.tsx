import SelectProps from "./SelectProps";

const Select = <T extends string | number>({
  optionClassName,
  className,
  name,
  defaultValue,
  options,
  onChange,
  placeholder,
  ...rest
}: SelectProps<T>) => {
  return (
    <select
      className={`flex-1 border appearance-none p-2 rounded-md items-center ${className}`}
      name={name}
      onChange={onChange}
      {...rest}
    >
      {placeholder && placeholder.length > 0 && (
        <option key={"option-placeholder"} value={defaultValue} hidden>
          {placeholder}
        </option>
      )}
      {options.map((x, index) => (
        <option
          key={`option-${x}${index}`}
          value={x.value}
          className={`${optionClassName}`}
        >
          {x.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
