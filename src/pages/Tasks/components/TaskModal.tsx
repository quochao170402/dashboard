import Modal from "@/custom-components/modal/Modal";
import TaskProperty from "./taskDetail/TaskProperty";

interface Props {
  data: ITask;
  visible: boolean;
  onClose: () => void;
}

const TaskModal = ({ data, visible, onClose }: Props) => {
  return (
    <Modal visible={visible} onClose={onClose} width={1000}>
      <div className="w-full h-full">
        <div className="w-full p-2 bg-gray-200 mb-4">Header</div>
        <div className="grid grid-cols-12 h-[calc(90vh-150px)]">
          <div className="col-span-8 mr-4 overflow-y-auto">
            <span className="text-2xl font-semibold">{data.summary}</span>
            <div className="bg-primary w-full min-h-64 mt-4">
              {/* TODO: Implement CkEditor */}
              {data.description && data.description.length > 0 ? (
                <p>{data.description}</p>
              ) : (
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea id="description" className="w-full h-full" rows={8}>
                    {data.description}
                  </textarea>
                </div>
              )}
            </div>
            <div>{/* Comments */}</div>
          </div>

          <div className="col-span-4 overflow-y-auto">
            <TaskProperty data={data} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
