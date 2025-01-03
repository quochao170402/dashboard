import { IOption } from "@/@types/Common";
import { Select, SelectProps } from "antd";
const { Option } = Select;

interface IProps extends SelectProps {
  value: string;
  onChange: (value: string) => void;
  options?: IOption<string>[];
  isMultiple?: boolean;
  disabled?: boolean;
}

const SelectInput = ({
  value,
  onChange,
  options,
  isMultiple = false,
  disabled = false,
  ...rest
}: IProps) => {
  return (
    <Select
      disabled={disabled}
      mode={isMultiple ? "multiple" : undefined}
      value={value.length > 0 ? value.split(",") : undefined}
      onChange={(e) => (isMultiple ? onChange(e.join(",")) : onChange(e))}
      style={{ width: "100%" }}
      {...rest}
    >
      {options?.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectInput;
