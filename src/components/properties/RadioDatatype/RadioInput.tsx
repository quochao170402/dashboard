import { Radio } from "antd";
import React from "react";

export interface RadioOption {
  label: string | React.ReactNode;
  value: string;
}

interface RadioInputProps {
  value: string | number | null; // Current value
  onChange: (value: string | number) => void; // Handler for changes
  options: RadioOption[]; // List of options for the radio group
  style?: React.CSSProperties; // Optional styles
}

const RadioInput: React.FC<RadioInputProps> = ({
  value,
  onChange,
  options,
  style,
}) => {
  return (
    <Radio.Group
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={style}
    >
      {options.map((option) => (
        <Radio key={option.value} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioInput;
