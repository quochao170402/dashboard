import MenuIconProps from "./common";

const ProjectIcon = ({ size = 24, color, filled = false }: MenuIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {filled ? (
        <path
          d="M14.6694 0.000488281C18.0704 0.000488281 19.9904 1.92949 20.0004 5.33049V14.6705C20.0004 18.0705 18.0704 20.0005 14.6694 20.0005H5.33037C1.92937 20.0005 0.000366211 18.0705 0.000366211 14.6705V5.33049C0.000366211 1.92949 1.92937 0.000488281 5.33037 0.000488281H14.6694ZM10.5004 4.13049C10.2194 3.96049 9.87937 3.96049 9.61037 4.13049C9.33937 4.29949 9.19037 4.61049 9.21937 4.92049V15.1105C9.27037 15.5405 9.62937 15.8605 10.0494 15.8605C10.4804 15.8605 10.8394 15.5405 10.8794 15.1105V4.92049C10.9194 4.61049 10.7704 4.29949 10.5004 4.13049ZM5.83037 7.41049C5.56037 7.24049 5.21937 7.24049 4.95037 7.41049C4.67937 7.58049 4.53037 7.88949 4.56037 8.20049V15.1105C4.59937 15.5405 4.95937 15.8605 5.38937 15.8605C5.82037 15.8605 6.17937 15.5405 6.21937 15.1105V8.20049C6.25037 7.88949 6.09937 7.58049 5.83037 7.41049ZM15.0894 11.0405C14.8204 10.8705 14.4804 10.8705 14.2004 11.0405C13.9294 11.2105 13.7804 11.5095 13.8204 11.8305V15.1105C13.8604 15.5405 14.2194 15.8605 14.6504 15.8605C15.0704 15.8605 15.4294 15.5405 15.4804 15.1105V11.8305C15.5094 11.5095 15.3604 11.2105 15.0894 11.0405Z"
          fill={color ?? "#3754DB"}
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4325 0.000488281C19.0595 0.000488281 21.4965 2.54649 21.4965 6.33549V15.1655C21.4965 18.9545 19.0595 21.5005 15.4325 21.5005H6.06046C2.43346 21.5005 -0.00354004 18.9545 -0.00354004 15.1655V6.33549C-0.00354004 2.54649 2.43346 0.000488281 6.06046 0.000488281H15.4325ZM15.4325 1.50049H6.06046C3.28846 1.50049 1.49646 3.39749 1.49646 6.33549V15.1655C1.49646 18.1035 3.28846 20.0005 6.06046 20.0005H15.4325C18.2055 20.0005 19.9965 18.1035 19.9965 15.1655V6.33549C19.9965 3.39749 18.2055 1.50049 15.4325 1.50049ZM6.11756 8.20299C6.53156 8.20299 6.86756 8.53899 6.86756 8.95299V15.813C6.86756 16.227 6.53156 16.563 6.11756 16.563C5.70356 16.563 5.36756 16.227 5.36756 15.813V8.95299C5.36756 8.53899 5.70356 8.20299 6.11756 8.20299ZM10.7846 4.91899C11.1986 4.91899 11.5346 5.25499 11.5346 5.66899V15.812C11.5346 16.226 11.1986 16.562 10.7846 16.562C10.3706 16.562 10.0346 16.226 10.0346 15.812V5.66899C10.0346 5.25499 10.3706 4.91899 10.7846 4.91899ZM15.3749 11.828C15.7889 11.828 16.1249 12.164 16.1249 12.578V15.812C16.1249 16.226 15.7889 16.562 15.3749 16.562C14.9609 16.562 14.6249 16.226 14.6249 15.812V12.578C14.6249 12.164 14.9609 11.828 15.3749 11.828Z"
          fill={color ?? "#3754DB"}
        />
      )}
    </svg>
  );
};

export default ProjectIcon;
