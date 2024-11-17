import { ReactNode } from "react";

interface Props {
  title?: string;
  visible: boolean;
  onClose: () => void;
  className?: string;
  children?: ReactNode;
  width?: number;
  height?: number;
  type?: "form" | "confirm" | "notification";
}
const Modal = ({
  title,
  className,
  visible,
  children,
  width,
  height,
  type = "form",
  onClose,
}: Props) => {
  const buttonGroup = (type: "form" | "confirm" | "notification") => {
    switch (type) {
      case "form":
        return (
          <div className="flex justify-end items-center p-4 gap-2">
            <button
              className="bg-red-500 py-2 px-4 rounded-lg shadow-lg active:bg-gray-200 text-white"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg active:bg-gray-200 "
              onClick={onClose}
            >
              Submit
            </button>
          </div>
        );
      case "confirm":
        return (
          <div className="flex justify-end items-center p-4 gap-2">
            <button
              className="bg-red-500 py-2 px-4 rounded-lg shadow-lg active:bg-gray-200 text-white"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg active:bg-gray-200 "
              onClick={onClose}
            >
              Confirm
            </button>
          </div>
        );
      case "notification":
        return (
          <div className="flex justify-end items-center p-4 gap-2">
            <button
              className="bg-red-500 py-2 px-4 rounded-lg shadow-lg active:bg-gray-200 text-white"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        );
    }
  };
  return (
    <>
      {visible && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50`}
          hidden={!false}
        >
          <div
            className={`flex flex-col rounded-lg shadow-lg bg-white ${className}`}
            style={{ width: width ?? "700px", height: height ?? "500px" }}
            hidden={!visible}
          >
            {title && (
              <div className="flex justify-center items-center p-4 uppercase font-bold text-xl">
                {title}
              </div>
            )}
            <div className="flex-grow overflow-y-auto p-4">{children}</div>
            {buttonGroup(type)}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
