import { forwardRef } from "react";
import DatePickerProps from "./DatePickerProps";

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, value, onChange, ...rest }, ref) => {
    const stringValue =
      value instanceof Date ? value.toISOString().split("T")[0] : value;

    return (
      <>
        <input
          ref={ref} // Forward the ref here
          type="date"
          value={stringValue}
          onChange={onChange}
          {...rest}
          className={`${className} w-full h-full border p-2 rounded-md`}
        />
      </>
    );
  }
);

export default DatePicker;
