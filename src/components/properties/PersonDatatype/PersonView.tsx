import { Person } from "@/lib/dummy";
import { Avatar, Space, Typography } from "antd";
import React from "react";

const { Text } = Typography;

interface PersonViewProps {
  personId: string;
  people: Person[];
}

const PersonView: React.FC<PersonViewProps> = ({ personId, people }) => {
  const person = people.find((p) => p.id === personId);

  if (!person) {
    return <Text type="danger">Person not found</Text>;
  }

  return (
    <Space className="flex items-center gap-4">
      <Avatar src={person.avatar}>{person.name}</Avatar>
      <Text>{person.name}</Text>
    </Space>
  );
};

export default PersonView;
