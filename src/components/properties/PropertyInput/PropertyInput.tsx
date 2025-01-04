import { Datatype } from "@/@types/Enums";
import { Property } from "@/@types/Property";
import { people } from "@/lib/dummy";
import type { UploadProps } from "antd";
import {
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Select,
  TimePicker,
  Upload,
  message,
} from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import PersonInput from "../PersonDatatype/PersonInput";
import RadioInput from "../RadioDatatype/RadioInput";
import SelectInput from "../SelectDatatype/SelectInput";

interface Props {
  property: Property;
  onChange: (propertyId: string, newValue: string) => void;
}

const { TextArea } = Input;
const { Option } = Select;

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
];

const PropertyInput = ({ property, onChange }: Props) => {
  const [value, setValue] = useState<string>("");

  // Convert API value to appropriate type
  useEffect(() => {
    let initialValue = property.value;

    switch (property.datatype) {
      case Datatype.Number:
      case Datatype.Decimal:
        initialValue = Number(property.value).toString();
        break;

      case Datatype.Boolean:
        initialValue = property.value === "true" ? "true" : "false";
        break;

      case Datatype.DateTime:
        initialValue = property.value; // Assuming the value is in ISO format (string)
        break;

      case Datatype.TimeSpan:
        initialValue = property.value; // Assuming the value is a valid time span string
        break;

      case Datatype.SelectList:
      case Datatype.MultiSelect:
        // If it's a select or multi-select, handle it as an array of strings (for multi-select)
        initialValue = property.value;
        break;

      case Datatype.RadioButton:
        // If it's a radio button, cast to the appropriate value
        initialValue = property.value;
        break;

      default:
        break;
    }

    setValue(initialValue);
  }, [property.value, property.datatype]);

  const handleChange = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e: React.ChangeEvent<HTMLInputElement> | string | number | any
  ) => {
    setValue(e.target ? e.target.value : e);
    onChange(property.id, e.target ? e.target.value : e);
  };

  switch (property.datatype) {
    case Datatype.Text:
      return (
        <Input value={value} onChange={handleChange} placeholder="Enter text" />
      );

    case Datatype.TextArea:
      return (
        <TextArea
          value={value}
          onChange={handleChange}
          rows={4}
          placeholder="Enter long text"
        />
      );

    case Datatype.Number:
      return (
        <InputNumber
          value={parseFloat(value)} // Ensure the value is a number
          onChange={handleChange}
          placeholder="Enter number"
          style={{ width: "100%" }}
        />
      );

    case Datatype.Decimal:
      return (
        <InputNumber
          value={parseFloat(value)} // Ensure the value is a decimal
          onChange={handleChange}
          placeholder="Enter decimal"
          style={{ width: "100%" }}
          step="0.01"
        />
      );

    case Datatype.DateTime:
      return (
        <DatePicker
          value={value ? dayjs(value) : null} // Assuming moment.js is used for date handling
          onChange={handleChange}
          showTime
          style={{ width: "100%" }}
        />
      );

    case Datatype.TimeSpan:
      return (
        <TimePicker
          value={value ? dayjs(value, "HH:mm:ss") : null} // Assuming time format handling
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      );

    case Datatype.Boolean:
      return (
        <Checkbox
          checked={value === "true"}
          onChange={(e) => setValue(e.target.checked ? "true" : "false")}
        ></Checkbox>
      );

    case Datatype.RadioButton:
      return (
        <RadioInput value={value} onChange={handleChange} options={options} />
      );

    case Datatype.SelectList:
    case Datatype.MultiSelect:
      return (
        <SelectInput
          value={value}
          onChange={handleChange}
          options={options}
          isMultiple
        />
      );

    case Datatype.File: {
      const props: UploadProps = {
        beforeUpload: (file) => {
          message.success(`${file.name} file uploaded successfully.`);
          return false;
        },
      };
      return (
        <Upload {...props}>
          <Input type="button" value="Upload File" />
        </Upload>
      );
    }

    case Datatype.Person:
      return (
        <PersonInput
          value={value}
          onChange={handleChange}
          placeholder="Choose a person"
          people={people}
        />
      );

    default:
      return <div>Unsupported Datatype</div>;
  }
};

export default PropertyInput;
