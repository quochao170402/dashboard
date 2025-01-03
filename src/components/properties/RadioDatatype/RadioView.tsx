import React from "react";
import { RadioOption } from "./RadioInput";

interface RadioViewProps {
  value: string | number | null; // The selected value
  options: RadioOption[]; // List of options to display
}

const RadioView: React.FC<RadioViewProps> = ({ value, options }) => {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <span>{selectedOption ? selectedOption.label : "No option selected"}</span>
  );
};

export default RadioView;
