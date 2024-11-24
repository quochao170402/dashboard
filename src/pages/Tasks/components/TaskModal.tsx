import Modal from "@/custom-components/modal/Modal";
import TaskDetail from "./taskDetail/TaskDetail";

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
          <div className="col-span-8 bg-green-400 mr-4 overflow-y-auto">
            <div className="h-[2000px]"></div>
          </div>
          <div className="col-span-4 bg-purple-200 overflow-y-auto">
            <TaskDetail data={data} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
