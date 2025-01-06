import { Avatar, Select, SelectProps, Space, Typography } from "antd";
import React from "react";

const { Option } = Select;
const { Text } = Typography;

interface Person {
  id: string;
  name: string;
  avatar?: string; // Optional avatar URL
}

interface PersonInputProps extends SelectProps<string> {
  people: Person[];
  value?: string; // Currently selected person ID
  onChange?: (value: string) => void; // Callback for when a person is selected
}

const PersonInput: React.FC<PersonInputProps> = ({
  people,
  value,
  onChange,
  ...rest
}) => {
  return (
    <Select
      value={value || undefined}
      onChange={onChange}
      style={{ width: "100%" }}
      showSearch
      optionFilterProp="children"
      dropdownRender={(menu) => <div>{menu}</div>}
      {...rest}
    >
      {people.map((person) => (
        <Option key={person.id} value={person.id}>
          <Space>
            <Avatar src={person.avatar} size="small">
              {person.name[0]}
            </Avatar>
            <Text>{person.name}</Text>
          </Space>
        </Option>
      ))}
    </Select>
  );
};

export default PersonInput;
