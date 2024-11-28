import { HTMLAttributes } from "react";

const Button = ({
  children,
  disabled = false,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { disabled?: boolean }) => {
  return (
    <button
      className={`p-[16px] rounded-[16px] text-[16px] font-bold w-full ${
        disabled
          ? "bg-[#3A4047] text-[#788391]"
          : "bg-[#237AF2] text-white hover:bg-[#0C60D4] active:bg-[#0B55BC]"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
