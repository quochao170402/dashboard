import { ButtonProps } from "./ButtonProps";

const Button = ({ icon, label, variant, size, ...rest }: ButtonProps) => {
  return (
    <>
      <button
        className={`p-4 btn-${variant} text-${size} flex gap-2`}
        {...rest}
      >
        {icon && icon}
        {label}
      </button>
    </>
  );
};

export default Button;
