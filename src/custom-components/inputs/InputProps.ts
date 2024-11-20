import { ChangeEvent, InputHTMLAttributes } from "react";

export default interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
