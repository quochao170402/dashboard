import { IToast } from "@/custom-components/toast/ToastProps";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ToastContextType {
  toastMessages: IToast[];
  toast: {
    success: (message: string) => void;
    info: (message: string) => void;
    warning: (message: string) => void;
    error: (message: string) => void;
  };
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
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
