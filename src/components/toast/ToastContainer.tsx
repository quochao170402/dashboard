import React from "react";

import useToast from "@/hooks/useToast";
import ToastMessage from "./ToastMessage";
const ToastContainer: React.FC = () => {
  const { toastMessages } = useToast();

  return (
    <div className="flex flex-col gap-4 fixed top-4 right-8 z-50">
      {toastMessages.map((toast) => (
        <ToastMessage key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
