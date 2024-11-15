import { X } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  visible: boolean;
  onClose: () => void;
  className?: string;
  children?: ReactNode;
  width?: number;
  height?: number;
}
const Modal = ({
  className,
  visible,
  children,
  width,
  height,
  onClose,
}: Props) => {
  console.log("visible", visible);
  return (
    <>
      {visible && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50`}
          hidden={!false}
        >
          <div
            className={`flex flex-col rounded-lg shadow-lg bg-white
        ${className}
      `}
            style={{ width: width ?? "500px", height: height ?? "500px" }}
            hidden={!visible}
          >
            <div className="flex-grow overflow-y-auto p-4">{children}</div>
            <div className="flex justify-end items-center p-4">
              <button
                className="bg-red-500 py-2 px-4 rounded-lg shadow-lg active:bg-gray-200 "
                onClick={onClose}
              >
                <X color="white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
