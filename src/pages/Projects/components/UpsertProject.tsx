import FileUploader from "@/custom-components/inputs/uploader/FileUploader";
import Modal from "@/custom-components/modal/Modal";
import Title from "@/custom-components/title/Title";

interface Props {
  visible: boolean;
  onClose: () => void;
  data?: IProject;
  updatable?: boolean;
}

const UpsertProject = ({ visible, data, onClose, updatable = true }: Props) => {
  return (
    <Modal height={520} visible={visible} onClose={onClose}>
      <div>
        <div className="flex items-center justify-between px-2">
          <Title className="mb-4" title={"Add new Project"} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-flow-col grid-cols-2 items-center gap-4 w-full h-full">
            <div className="h-full w-full">
              <FileUploader
                className="h-full w-full"
                enablePreview
                onFileSelect={(file) => console.log(file)}
              />
            </div>

            <div className="grid grid-flow-row grid-rows-3 gap-4">
              <input
                disabled={!updatable}
                placeholder="Name"
                type="text"
                className="p-2 border rounded-md"
                value={data?.name}
              />
              <input
                disabled={!updatable}
                placeholder="Key"
                type="text"
                className="p-2 border rounded-md"
                value={data?.key}
              />
              <input
                disabled={!updatable}
                placeholder="Type"
                type="text"
                className="p-2 border rounded-md"
                value={data?.type}
              />
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 items-center gap-4 w-full h-full">
            <div className="grid grid-flow-row grid-rows-3 gap-4">
              <input
                disabled={!updatable}
                placeholder="Category"
                type="text"
                className="p-2 border rounded-md"
                value={data?.category}
              />
              <input
                disabled={!updatable}
                placeholder="Lead"
                type="text"
                className="p-2 border rounded-md"
                value={data?.lead}
              />
              <input
                disabled={!updatable}
                placeholder="URL"
                type="text"
                className="p-2 border rounded-md"
                value={data?.url}
              />
            </div>
            <textarea
              disabled={!updatable}
              className="h-full p-2 w-full border rounded-md placeholder-gray-400"
              placeholder="Description..."
              value={data?.description}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UpsertProject;
