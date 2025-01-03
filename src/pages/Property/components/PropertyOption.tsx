import { Datatype } from "@/@types/Enums";
import { Button, Col, Input, Row, Space, Tag } from "antd";
import React, { useState } from "react";

interface PropertyOptionsProps {
  datatype: Datatype;
  options: string[]; // Current options
  onOptionsChange: (options: string[]) => void; // Function to update options
}

const PropertyOptions: React.FC<PropertyOptionsProps> = ({
  datatype,
  options,
  onOptionsChange,
}) => {
  const [newOption, setNewOption] = useState<string>("");

  const handleAddOption = () => {
    if (newOption) {
      onOptionsChange([...options, newOption]);
      setNewOption("");
    }
  };

  const handleRemoveOption = (index: number) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    onOptionsChange(updatedOptions);
  };

  const renderOptions = () => {
    switch (datatype) {
      case Datatype.SelectList:
      case Datatype.MultiSelect:
      case Datatype.RadioButton:
        return (
          <div>
            <Row gutter={16}>
              <Col span={12}>
                <Input
                  placeholder="Option label"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                />
              </Col>
              <Col span={12}>
                <Input
                  placeholder="Option value"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                />
              </Col>
            </Row>
            <Button
              type="primary"
              onClick={handleAddOption}
              style={{ marginTop: 8 }}
            >
              Add Option
            </Button>
            <div style={{ marginTop: 16 }}>
              {options.map((option, index) => (
                <Space key={index} size="small">
                  <Tag>{option}</Tag>
                  <Button type="link" onClick={() => handleRemoveOption(index)}>
                    Remove
                  </Button>
                </Space>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderOptions()}</div>;
};

export default PropertyOptions;
