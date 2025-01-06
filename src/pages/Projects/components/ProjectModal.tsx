import { ISettingModel } from "@/@types/Property";
import PropertyInput from "@/components/properties/PropertyInput/PropertyInput";
import { Modal } from "antd";
import { useEffect, useState } from "react";

interface Props {
  properties: ISettingModel[];
  onSubmit: (
    values: {
      PropertyId: string;
      Value: string;
    }[]
  ) => void;
  visible: boolean;
  onClose: () => void;
}

const ProjectModal = ({ properties, visible, onClose, onSubmit }: Props) => {
  const [values, setValues] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const initialValues = properties.reduce((acc, property) => {
      if (property.isUsed) {
        acc[property.id] = "";
      }
      return acc;
    }, {} as { [key: string]: string });

    setValues(initialValues);
  }, [properties]);

  const handleInputChange = (propertyId: string, newValue: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [propertyId]: newValue, // Update the value of the specific property
    }));
  };

  const renderInput = (property: ISettingModel) => {
    return (
      <PropertyInput
        property={{
          id: property.id,
          name: property.name,
          label: property.label,
          datatype: property.datatype,
          isDefault: property.isDefault ?? false,
          value: values[property.id] || "", // Use the controlled value
          isUsed: property.isUsed,
        }}
        onChange={handleInputChange} // Pass onChange to PropertyInput
      />
    );
  };

  const handleSubmit = () => {
    const payload = Object.entries(values).map(([propertyId, value]) => ({
      PropertyId: propertyId,
      Value: value.toString(),
    }));

    onSubmit(payload);
    // console.log(values);
  };

  return (
    <>
      <Modal
        open={visible}
        onCancel={onClose}
        onClose={onClose}
        destroyOnClose
        title="Create Project"
        onOk={handleSubmit}
      >
        <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto no-scrollbar">
          {properties
            .filter((x) => x.isUsed)
            .map((property) => (
              <div className="flex flex-col gap-2" key={property.id}>
                <p className="font-normal opacity-80">{property.label}</p>
                {renderInput(property)}
              </div>
            ))}
        </div>
      </Modal>
    </>
  );
};

export default ProjectModal;
