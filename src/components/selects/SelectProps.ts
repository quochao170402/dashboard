import { IOption } from "@/@types/Common";
import { HTMLAttributes } from "react";

export default interface SelectProps<T>
  extends HTMLAttributes<HTMLSelectElement> {
  name?: string;
  value?: string;
  selected?: T;
  defaultValue?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: IOption<T>[];
  placeholder?: string;
  optionClassName?: string;
}
