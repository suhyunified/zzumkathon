import { HTMLAttributes } from "react";

const Footer = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className="absolute py-[16px] px-[24px] left-0 bottom-0 w-full"
    ></div>
  );
};

export default Footer;
