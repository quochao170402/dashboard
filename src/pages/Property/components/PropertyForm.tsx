import { Datatype } from "@/@types/Enums";
import { ISettingModel } from "@/@types/Property";
import { DatatypeAliases } from "@/lib/utils";
import {
  Button,
  Checkbox,
  Input,
  Modal,
  Select,
  Space,
  Tag,
  Tooltip,
} from "antd";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface Props {
  data?: ISettingModel;
  open: boolean;
  onClose: () => void;
  onSubmit: (data: ISettingModel) => void;
}

const PropertyForm = ({ open, onClose, onSubmit: submit, data }: Props) => {
  const { control, handleSubmit, watch } = useForm<ISettingModel>({
    defaultValues: data || {
      name: "",
      label: "",
      datatype: Datatype.Text,
      note: "",
      isDefault: false,
      isUsed: false,
      propertyType: undefined,
      options: [],
    },
  });

  const [options, setOptions] = useState<string[]>(data?.options || []);
  const [newOption, setNewOption] = useState("");
  const { datatype } = watch();

  const handleAddOption = () => {
    if (newOption) {
      setOptions((prevOptions) => [...prevOptions, newOption]);

      setNewOption("");
    }
  };

  const handleRemoveOption = (index: number) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
  };
  const onSubmit = (data: ISettingModel) => {
    console.log("{ ...data, options } :>> ", { ...data, options });
    data.options = options;
    submit(data);
    onClose();
  };

  return (
    <Modal
      open={open}
      onOk={handleSubmit(onSubmit)}
      onClose={onClose}
      onCancel={onClose}
      destroyOnClose
      title={data ? "Edit Property" : "Add Property"}
      // footer={() => {
      //   return (
      //     <div className="flex justify-end">
      //       <Button onClick={onClose}>Cancel</Button>
      //       <Button onClick={handleSubmit(onSubmit)} type="primary">
      //         {data ? "Save" : "Add"}
      //       </Button>
      //     </div>
      //   );
      // }}
    >
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold">Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className="mt-2 w-full"
                placeholder="Enter property name"
              />
            )}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Label</label>
          <Controller
            name="label"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className="mt-2 w-full"
                placeholder="Enter property label"
              />
            )}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Datatype</label>
          <Controller
            name="datatype"
            control={control}
            // disabled={!!data?.id}
            render={({ field }) => (
              <Select
                {...field}
                style={{ width: "100%" }}
                placeholder="Select Datatype"
                options={Object.values(Datatype)
                  .filter((key) => !isNaN(Number(key))) // Filter numeric keys (enum values)
                  .map((datatype) => ({
                    value: Number(datatype),
                    label: DatatypeAliases[datatype as Datatype],
                  }))}
                onChange={(value) => {
                  field.onChange(value);
                  if (
                    value === Datatype.SelectList ||
                    value === Datatype.MultiSelect ||
                    value === Datatype.RadioButton
                  ) {
                    setOptions(data?.options ?? []); // Reset or keep options when switching datatypes
                  } else {
                    setOptions([]);
                  }
                }}
              />
            )}
          />
        </div>

        {datatype === Datatype.SelectList ||
        datatype === Datatype.MultiSelect ||
        datatype === Datatype.RadioButton ? (
          <div>
            <label className="block text-sm font-semibold mb-2">Options</label>
            <div className="flex items-center space-x-4">
              <Input
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
                placeholder="Option label"
              />

              <Tooltip title="Add Option">
                <Button
                  icon={<PlusCircle size={18} color="green" />}
                  onClick={() => handleAddOption()}
                />
              </Tooltip>
            </div>
            <div className="mt-2">
              {options.map((option, index) => (
                <Space key={index} size="middle" className="">
                  <Tag>
                    {option}
                    <span
                      className="cursor-pointer ml-4 text-red-500"
                      onClick={() => handleRemoveOption(index)}
                    >
                      x
                    </span>
                  </Tag>
                </Space>
              ))}
            </div>
          </div>
        ) : null}

        <div>
          <label className="block text-sm font-semibold">Note</label>
          <Controller
            name="note"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                className="mt-2 w-full"
                placeholder="Enter a note"
              />
            )}
          />
        </div>

        <div>
          <Controller
            name="isDefault"
            control={control}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} className="mr-2">
                Default
              </Checkbox>
            )}
          />
          <Controller
            name="isUsed"
            control={control}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} className="mr-2">
                Used
              </Checkbox>
            )}
          />
        </div>
      </form>
    </Modal>
  );
};

export default PropertyForm;
