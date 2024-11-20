import { HTMLAttributes } from "react";

interface Props<T> extends HTMLAttributes<HTMLSelectElement> {
  name?: string;
  value?: string;
  selected?: T;
  defaultValue?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: IOption<T>[];
}
const Select = <T extends string | number>({
  name,
  defaultValue,
  options,
  onChange,
  ...rest
}: Props<T>) => {
  return (
    <select
      className="flex-1 border appearance-none p-2 rounded-md"
      name={name}
      defaultValue={defaultValue}
      onChange={onChange}
      {...rest}
    >
      {options.map((x, index) => (
        <option key={`option-${x}${index}`} value={x.value}>
          {x.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
