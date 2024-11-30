import Editor from "@/custom-components/editor/Editor";
import Modal from "@/custom-components/modal/Modal";
import TaskComment from "./taskComment/TaskComment";
import TaskProperty from "./taskDetail/TaskProperty";

interface Props {
  data: ITask;
  visible: boolean;
  onChangeTask: (task: ITask) => void;
  onClose: () => void;
}

const TaskModal = ({ data, visible, onClose, onChangeTask }: Props) => {
  return (
    <Modal visible={visible} onClose={onClose} width={1000}>
      <div className="w-full h-full">
        <div className="w-full p-2 bg-gray-200 mb-4">Header</div>
        <div className="grid grid-cols-12 h-[calc(90vh-150px)]">
          <div className="col-span-8 mr-4 overflow-y-auto no-scrollbar">
            <span className="text-2xl font-semibold">{data.summary}</span>
            <div className="w-full mt-4 flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              {data.description && data.description.length > 0 ? (
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              ) : (
                <Editor
                  value={data.description ?? ""}
                  onChange={(value) =>
                    onChangeTask({ ...data, description: value })
                  }
                />
              )}
            </div>

            <div className="mt-4">
              <hr />
              <h1 className="uppercase font-semibold text-lg my-2">Comment</h1>
              <div>
                <TaskComment comments={data.comments ?? []} />
              </div>
            </div>
          </div>
          <div className="col-span-4 overflow-y-auto border-l pl-2">
            <TaskProperty data={data} onChangeTask={onChangeTask} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
