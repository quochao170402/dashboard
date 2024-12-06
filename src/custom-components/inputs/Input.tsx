import { forwardRef } from "react";
import { InputProps } from "./InputProps";

const Input = forwardRef<HTMLInputElement, InputProps<string | number>>(
  ({ value, className, ...rest }, ref) => {
    return (
      <input
        ref={ref} // Forward the ref here
        className={`${className} w-full h-full border p-2 rounded-md`}
        value={value}
        {...rest}
      />
    );
  }
);

export default Input;
