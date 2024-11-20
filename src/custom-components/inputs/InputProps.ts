import { ChangeEvent, InputHTMLAttributes } from "react";

export interface InputProps<T extends string | number>
  extends InputHTMLAttributes<HTMLInputElement> {
  value?: T;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
