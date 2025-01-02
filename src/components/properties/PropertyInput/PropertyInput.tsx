import { Datatype } from "@/@types/Enums";
import { Property } from "@/@types/Property";
import type { UploadProps } from "antd";
import {
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Select,
  TimePicker,
  Upload,
  message,
} from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

interface Props {
  property: Property;
  onChange: (propertyId: string, newValue: string) => void;
}

const { TextArea } = Input;
const { Option } = Select;

const PropertyInput = ({ property, onChange }: Props) => {
  const [value, setValue] = useState<string>("");

  // Convert API value to appropriate type
  useEffect(() => {
    let initialValue = property.value;

    switch (property.datatype) {
      case Datatype.Number:
        initialValue = Number(property.value).toString();
        break;

      case Datatype.Decimal:
        initialValue = parseFloat(property.value).toString();
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
        >
          Checkbox
        </Checkbox>
      );

    case Datatype.RadioButton:
      return (
        <Radio.Group onChange={handleChange} value={value}>
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
        </Radio.Group>
      );

    case Datatype.SelectList:
      return (
        <Select
          value={value}
          onChange={handleChange}
          style={{ width: "100%" }}
          placeholder="Select an option"
        >
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
        </Select>
      );

    case Datatype.MultiSelect:
      return (
        <Select
          mode="multiple"
          value={value.split(",")} // Convert comma-separated string to an array
          onChange={(e) => handleChange(e.join(","))} // Convert array back to string on change
          style={{ width: "100%" }}
          placeholder="Select multiple options"
        >
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
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
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Enter person's name"
        />
      );

    default:
      return <div>Unsupported Datatype</div>;
  }
};

export default PropertyInput;
