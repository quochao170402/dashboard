export interface ToastProps {
  toast: IToast;
}

export interface IToast {
  id: string;
  message: string;
  type: string;
  duration?: number;
}
