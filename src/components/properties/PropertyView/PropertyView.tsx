import { Datatype } from "@/@types/Enums";
import { Property } from "@/@types/Property";
import { people } from "@/lib/dummy";
import { Tag, Tooltip, Typography } from "antd";
import dayjs from "dayjs";
import PersonView from "../PersonDatatype/PersonView";
import RadioView from "../RadioDatatype/RadioView";

const { Text, Paragraph } = Typography;
interface Props {
  property: Property;
}

const PropertyView = ({ property }: Props) => {
  const renderViewByDatatype = () => {
    switch (property.datatype) {
      case Datatype.Text:
        return <Text>{property.value ?? "-"}</Text>;

      case Datatype.TextArea:
        if (!property.value) {
          return <Paragraph>-</Paragraph>;
        }

        if (property.value.length < 50) {
          return <Paragraph>{property.value}</Paragraph>;
        }

        return (
          <Tooltip title={property.value}>
            <Paragraph className="!truncate">
              {property.value.slice(0, 40)}...
            </Paragraph>
          </Tooltip>
        );

      case Datatype.Number:
      case Datatype.Decimal:
        return <Text>{property.value ?? "-"}</Text>;

      case Datatype.DateTime:
        return (
          <Text>
            {property.value ? dayjs(property.value).format("DD/MM/YYYY") : "-"}
          </Text>
        );

      case Datatype.TimeSpan:
        return <Text>{property.value ?? "-"}</Text>;

      case Datatype.Boolean:
        return property.value === "true" ? (
          <Tag color="green">True</Tag>
        ) : (
          <Tag color="red">False</Tag>
        );

      case Datatype.RadioButton:
        return (
          <RadioView
            value={property.value}
            options={
              property.options?.map((opt) => ({ label: opt, value: opt })) || []
            }
          />
        );
      case Datatype.SelectList:
        return (
          <Text>
            {property.options?.find((opt) => opt === property.value) || "N/A"}
          </Text>
        );

      case Datatype.File:
        return <Text>{property.value}</Text>;

      case Datatype.MultiSelect:
        return (
          <>
            {property.value.split(",").map((val) => (
              <Tag key={val}>{val}</Tag>
            ))}
          </>
        );

      case Datatype.Person:
        return <PersonView personId={property.value} people={people} />;

      default:
        return <Text>{property.value || "N/A"}</Text>;
    }
  };
  return <>{renderViewByDatatype()}</>;
};

export default PropertyView;
