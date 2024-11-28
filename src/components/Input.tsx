import { ChangeEvent, HTMLAttributes } from "react";
import Text from "./Text";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  placeholder?: string;
  maxLength?: number;
  subTitle?: React.ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ subTitle, ...props }: InputProps) => {
  return (
    <>
      <div className="rounded-[16px] bg-[#33383E] p-[16px]">
        <input
          {...props}
          className="w-full text-center text-white text-[20px] bg-inherit outline-none"
        />
      </div>
      {subTitle && (
        <div className="flex justify-center mt-[12px]">
          <Text px={14} color="#788391" weight={400}>
            {subTitle}
          </Text>
        </div>
      )}
    </>
  );
};

export default Input;
