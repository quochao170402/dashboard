import { Datatype } from "@/@types/Enums";
import { IProperty } from "@/@types/Property";

interface IProps {
  property: IProperty;
}

const Property = ({ property }: IProps) => {
  const renderInput = () => {
    switch (property.datatype) {
      case Datatype.Text:
        return <input type="text" placeholder={property.label} />;
      case Datatype.TextArea:
        return <textarea placeholder={property.label} />;
      case Datatype.Number:
        return <input type="number" placeholder={property.label} />;
      case Datatype.Decimal:
        return <input type="number" step="0.01" placeholder={property.label} />;
      case Datatype.DateTime:
        return <input type="datetime-local" />;
      case Datatype.TimeSpan:
        return <input type="time" />;
      case Datatype.Boolean:
        return <input type="checkbox" />;
      case Datatype.RadioButton:
        return (
          <div>
            {(property.note?.split(",") || []).map((option, index) => (
              <label key={index}>
                <input type="radio" name={property.name} value={option} />
                {option}
              </label>
            ))}
          </div>
        );
      case Datatype.SelectList:
        return (
          <select>
            {(property.note?.split(",") || []).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case Datatype.File:
        return <input type="file" />;
      case Datatype.MultiSelect:
        return (
          <select multiple>
            {(property.note?.split(",") || []).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case Datatype.Person:
        return <input type="text" placeholder={`Search ${property.label}`} />;
      default:
        return <span>Unsupported datatype: {property.datatype}</span>;
    }
  };

  return <>{renderInput()}</>;
};

export default Property;
