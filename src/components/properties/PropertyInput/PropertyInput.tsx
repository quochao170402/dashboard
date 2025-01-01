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
import React, { useState } from "react";

interface Props {
  property: Property;
}

const { TextArea } = Input;
const { Option } = Select;

const PropertyInput = ({ property }: Props) => {
  const [value, setValue] = useState<any>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | string | number | any
  ) => {
    if (e?.target) {
      setValue(e.target.value); // For inputs like text, textarea
    } else {
      setValue(e); // For Select, DatePicker, etc.
    }
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
          value={value}
          onChange={handleChange}
          placeholder="Enter number"
          style={{ width: "100%" }}
        />
      );

    case Datatype.Decimal:
      return (
        <InputNumber
          value={value}
          onChange={handleChange}
          placeholder="Enter decimal"
          style={{ width: "100%" }}
          step="0.01"
        />
      );

    case Datatype.DateTime:
      return (
        <DatePicker
          value={value}
          onChange={handleChange}
          showTime
          style={{ width: "100%" }}
        />
      );

    case Datatype.TimeSpan:
      return (
        <TimePicker
          value={value}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      );

    case Datatype.Boolean:
      return (
        <Checkbox checked={value} onChange={(e) => setValue(e.target.checked)}>
          Checkbox
        </Checkbox>
      );

    case Datatype.RadioButton:
      return (
        <Radio.Group onChange={handleChange} value={value}>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
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
          value={value}
          onChange={handleChange}
          style={{ width: "100%" }}
          placeholder="Select multiple options"
        >
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      );

    case Datatype.File:
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
