import { IToast } from "@/custom-components/toast/ToastProps";
import { ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToastContext from "./ToastContext";

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toastMessages, setToasts] = useState<IToast[]>([]);

  const addToast = (
    message: string,
    type: "info" | "success" | "warning" | "error"
  ) => {
    setToasts((prevToasts) => [...prevToasts, { message, type, id: uuidv4() }]);
  };

  const toast = {
    success: (message: string) => {
      addToast(message, "success");
    },
    info: (message: string) => {
      addToast(message, "info");
    },
    warning: (message: string) => {
      addToast(message, "warning");
    },
    error: (message: string) => {
      addToast(message, "error");
    },
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toastMessages, toast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
