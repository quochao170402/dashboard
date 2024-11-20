import { ReactNode, useEffect, useRef } from "react";

interface Props {
  title?: string;
  visible: boolean;
  className?: string;
  children?: ReactNode;
  width?: number;
  height?: number;
  type?: "form" | "confirm" | "notification";
  isShowSubmitButton?: boolean;
  onClose: () => void;
  onSubmit?: VoidFunction;
}
const Modal = ({
  title,
  className,
  visible,
  children,
  width,
  height,
  isShowSubmitButton,
  onClose,
  onSubmit,
  type = "form",
}: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (visible) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible]);

  const getSubmitButton = (type: "form" | "confirm" | "notification") => {
    switch (type) {
      case "form":
        return (
          <>
            <button
              className="bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg active:bg-gray-200 "
              onClick={onSubmit}
            >
              Submit
            </button>
          </>
        );
      case "confirm":
        return (
          <>
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg active:bg-gray-200 "
              onClick={onSubmit}
            >
              Confirm
            </button>
          </>
        );
      case "notification":
        return <></>;
    }
  };

  return (
    <>
      {visible && (
        <div
          onClick={handleOutsideClick}
          className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50`}
          hidden={!false}
        >
          <div
            ref={modalRef}
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
            <div className="flex justify-end items-center p-4 gap-2">
              <button
                className="bg-red-500 py-2 px-4 rounded-lg shadow-lg active:bg-gray-200 text-white"
                onClick={onClose}
              >
                Close
              </button>
              {isShowSubmitButton && getSubmitButton(type)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
