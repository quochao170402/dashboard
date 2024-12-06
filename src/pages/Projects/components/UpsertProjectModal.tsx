import DatePicker from "@/custom-components/date-picker/DatePicker";
import Input from "@/custom-components/inputs/Input";
import Modal from "@/custom-components/modal/Modal";
import Title from "@/custom-components/title/Title";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

interface Props {
  visible: boolean;
  onClose: () => void;
  data?: IProject;
  updatable?: boolean;
  onSubmit?: (project: IProject) => void;
}

const UpsertProjectModal = ({
  visible,
  data,
  onClose,
  updatable = true,
  onSubmit,
}: Props) => {
  const { handleSubmit, control, reset } = useForm<IProject>({
    defaultValues: useMemo(() => {
      return data;
    }, [data]),
  });

  const handleClose = () => {
    onClose();
    reset();
  };

  return (
    <Modal
      height={550}
      width={800}
      visible={visible}
      onClose={handleClose}
      isShowSubmitButton={updatable}
      onSubmit={() => {
        if (onSubmit) {
          handleSubmit(onSubmit);
        }
      }}
    >
      <div>
        <div className="flex items-center justify-between px-2">
          <Title className="mb-4" title={"Add new Project"} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-flow-col grid-cols-2 items-center gap-4 w-full h-full">
            <div className="grid grid-flow-row grid-rows-3 gap-4">
              <Controller
                defaultValue={data?.name}
                control={control}
                render={({ field }) => (
                  <Input
                    disabled={!updatable}
                    placeholder="Name"
                    type="text"
                    className="p-2 border rounded-md"
                    {...field}
                  />
                )}
                name={"name"}
              />
              <Controller
                defaultValue={data?.key}
                control={control}
                name="key"
                render={({ field }) => (
                  <Input
                    disabled={!updatable}
                    placeholder="Key"
                    type="text"
                    className="p-2 border rounded-md"
                    {...field}
                  />
                )}
              />
              <Controller
                defaultValue={data?.startDate || new Date()}
                control={control}
                name="startDate"
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    disabled={!updatable}
                    className="p-2 border rounded-md"
                  />
                )}
              />
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 items-center gap-4 w-full h-full">
            <div className="grid grid-flow-row grid-rows-3 gap-4">
              <Controller
                defaultValue={data?.leaderId}
                control={control}
                name="leaderId"
                render={({ field }) => (
                  <Input
                    disabled={!updatable}
                    placeholder="Leader"
                    type="text"
                    className="p-2 border rounded-md"
                    {...field}
                  />
                )}
              />
              <Controller
                defaultValue={data?.url}
                control={control}
                name="url"
                render={({ field }) => (
                  <Input
                    disabled={!updatable}
                    placeholder="URL"
                    type="text"
                    className="p-2 border rounded-md"
                    {...field}
                  />
                )}
              />
            </div>
            <Controller
              defaultValue={data?.description}
              control={control}
              name="description"
              render={({ field }) => (
                <textarea
                  disabled={!updatable}
                  className="h-full p-2 w-full border rounded-md placeholder-gray-400"
                  placeholder="Description..."
                  {...field}
                />
              )}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UpsertProjectModal;
