import Title from "@/components/title/Title";
import { DatePicker, Input, Modal, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
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
  const { control, reset } = useForm<IProject>({
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
      open={visible}
      onCancel={handleClose}
      onOk={async () => {
        await control.handleSubmit((data: IProject) => {
          if (onSubmit) {
            onSubmit(data);
          }
        })();
      }}
      destroyOnClose
    >
      <div>
        <div className="flex items-center justify-between">
          <Title className="mb-4" title={"Add new Project"} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-flow-row grid-cols-2 items-center gap-4 w-full h-full">
            <div className="flex flex-col justify-between gap-2 items-start">
              <Typography.Text>Name</Typography.Text>
              <Controller
                defaultValue={data?.name}
                control={control}
                render={({ field }) => (
                  <Input
                    id="name"
                    disabled={!updatable}
                    placeholder="Name"
                    type="text"
                    className="p-2 border rounded-md"
                    {...field}
                  />
                )}
                name={"name"}
              />
            </div>
            <div className="flex flex-col justify-between gap-2 items-start">
              <Typography.Text>Key</Typography.Text>
              <Controller
                defaultValue={data?.key}
                control={control}
                name="key"
                render={({ field }) => (
                  <Input
                    id="key"
                    disabled={data != undefined}
                    placeholder="Key"
                    type="text"
                    className="p-2 border rounded-md"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="flex flex-col justify-between gap-2 items-start">
              <Typography.Text>Start Date</Typography.Text>
              <Controller
                defaultValue={data?.startDate}
                control={control}
                name="startDate"
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(_date, dateString) => field.onChange(dateString)}
                    disabled={!updatable}
                    className="p-2 border rounded-md w-full"
                  />
                )}
              />
            </div>
            <div className="flex flex-col justify-between gap-2 items-start">
              <Typography.Text>End Date</Typography.Text>
              <Controller
                defaultValue={data?.endDate}
                control={control}
                name="endDate"
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(_date, dateString) => field.onChange(dateString)}
                    disabled={!updatable}
                    className="p-2 border rounded-md w-full"
                  />
                )}
              />
            </div>
            <div className="flex flex-col justify-between gap-2 items-start">
              <Typography.Text>Leader</Typography.Text>
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
            </div>
            <div className="flex flex-col justify-between gap-2 items-start">
              <Typography.Text>Url</Typography.Text>
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
            <div className="col-span-2 flex flex-col justify-between gap-2 items-start">
              <Typography.Text>Description</Typography.Text>
              <Controller
                defaultValue={data?.description}
                control={control}
                name="description"
                render={({ field }) => (
                  <TextArea
                    disabled={!updatable}
                    className="h-full p-2 w-full border rounded-md placeholder-gray-400"
                    placeholder="Enter project description"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UpsertProjectModal;
