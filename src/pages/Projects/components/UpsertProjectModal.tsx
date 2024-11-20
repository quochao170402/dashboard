import Select from "@/custom-components/inputs/selects/Select";
import FileUploader from "@/custom-components/inputs/uploader/FileUploader";
import Modal from "@/custom-components/modal/Modal";
import Title from "@/custom-components/title/Title";

interface Props {
  visible: boolean;
  onClose: () => void;
  data?: IProject;
  setData?: (data: IProject) => void;
  updatable?: boolean;
  onSubmit?: VoidFunction;
}
const types = ["Type A", "Type B", "Type C", "Type D", "Type E"];
const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
];

const UpsertProjectModal = ({
  visible,
  data,
  setData,
  onClose,
  updatable = true,
  onSubmit,
}: Props) => {
  return (
    <Modal
      height={550}
      width={800}
      visible={visible}
      onClose={onClose}
      isShowSubmitButton={updatable}
      onSubmit={onSubmit}
    >
      <div>
        <div className="flex items-center justify-between px-2">
          <Title className="mb-4" title={"Add new Project"} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-flow-col grid-cols-2 items-center gap-4 w-full h-full">
            <div className="h-full w-full">
              {data?.url && data?.url.length > 0 ? (
                <img src={data.url} />
              ) : (
                <FileUploader
                  disabled={!updatable}
                  className="h-full w-full"
                  enablePreview
                  onFileSelect={(file) => console.log(file)}
                />
              )}
            </div>

            <div className="grid grid-flow-row grid-rows-3 gap-4">
              <input
                disabled={!updatable}
                placeholder="Name"
                type="text"
                className="p-2 border rounded-md"
                value={data?.name}
                onChange={(e) =>
                  setData && data && setData({ ...data, name: e.target.value })
                }
              />
              <input
                disabled={!updatable}
                placeholder="Key"
                type="text"
                className="p-2 border rounded-md"
                value={data?.key}
                onChange={(e) =>
                  setData && data && setData({ ...data, key: e.target.value })
                }
              />
              <Select
                onChange={(e) =>
                  setData && data && setData({ ...data, type: e.target.value })
                }
                options={types.map((x): IOption<string> => {
                  return { label: x, value: x };
                })}
              />
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 items-center gap-4 w-full h-full">
            <div className="grid grid-flow-row grid-rows-3 gap-4">
              <Select
                onChange={(e) =>
                  setData &&
                  data &&
                  setData({ ...data, category: e.target.value })
                }
                options={categories.map((x): IOption<string> => {
                  return { label: x, value: x };
                })}
              />
              <input
                disabled={!updatable}
                placeholder="Lead"
                type="text"
                className="p-2 border rounded-md"
                value={data?.lead}
                onChange={(e) =>
                  setData && data && setData({ ...data, lead: e.target.value })
                }
              />
              <input
                disabled={!updatable}
                placeholder="URL"
                type="text"
                className="p-2 border rounded-md"
                value={data?.url}
                onChange={(e) =>
                  setData && data && setData({ ...data, url: e.target.value })
                }
              />
            </div>
            <textarea
              disabled={!updatable}
              className="h-full p-2 w-full border rounded-md placeholder-gray-400"
              placeholder="Description..."
              value={data?.description}
              onChange={(e) =>
                setData &&
                data &&
                setData({ ...data, description: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UpsertProjectModal;
