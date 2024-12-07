import { IToast } from "@/components/toast/ToastProps";
import { createContext } from "react";

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

export default ToastContext;
