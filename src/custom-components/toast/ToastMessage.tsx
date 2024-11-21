import useToast from "@/hooks/useToast";
import { CircleAlert, CircleCheck, CircleX, TriangleAlert } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { ToastProps } from "./ToastProps";

const toastStyles: Record<string, string> = {
  success: "bg-[#28A745] text-white",
  error: "bg-[#DC3545] text-white",
  info: "bg-[#17A2B8] text-white",
  warning: "bg-[#FFC107] text-[#212529]",
};

const icons: Record<string, ReactNode> = {
  error: <CircleX />,
  info: <CircleAlert />,
  warning: <TriangleAlert />,
  success: <CircleCheck />,
};

const ToastMessage = ({ toast }: ToastProps) => {
  const { removeToast } = useToast();
  const [isExist, setIsExist] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsExist(false);
      },
      toast.duration ? toast.duration : 3000
    );

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div
      className={`p-3 w-72 rounded-md flex items-center space-x-2 gap-2
        cursor-pointer transition ease-in-out hover:scale-105 animate-slideIn
        ${toastStyles[toast.type]} ${
        isExist ? "animate-slideIn" : "animate-slideOut"
      }
      `}
      onClick={() => {
        setIsExist(false);
      }}
      onAnimationEnd={(e) => {
        if (e.animationName === "slideOut") removeToast(toast.id);
      }}
    >
      {icons[toast.type]}
      <span className="w-[80%] flex-grow break-words">{toast.message}</span>
    </div>
  );
};

export default ToastMessage;
