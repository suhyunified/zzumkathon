import { HTMLAttributes } from "react";

const Button = ({
  children,
  disabled = false,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { disabled?: boolean }) => {
  return (
    <button
      className={`p-[16px] rounded-[16px] text-white text-[16px] font-bold w-full ${
        disabled
          ? '"bg-[#DADEE3]'
          : "bg-[#237AF2]  hover:bg-[#0C60D4] active:bg-[#0B55BC]"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
