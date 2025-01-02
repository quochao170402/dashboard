import { Datatype } from "@/@types/Enums";
import { DatatypeAliases } from "@/lib/utils";
import { Select } from "antd";

interface IProps {
  value: number;
  onChange: (value: number) => void;
}

const DatatypeSelect = ({ value, onChange }: IProps) => {
  // Generate options from Datatype enum
  const options = Object.values(Datatype)
    .filter((key) => !isNaN(Number(key))) // Filter numeric keys (enum values)
    .map((datatype) => ({
      value: Number(datatype),
      label: DatatypeAliases[datatype as Datatype],
    }));

  return (
    <Select
      style={{ width: "100%" }}
      placeholder="Select Datatype"
      options={options}
      value={value}
      onChange={onChange}
    />
  );
};

export default DatatypeSelect;
