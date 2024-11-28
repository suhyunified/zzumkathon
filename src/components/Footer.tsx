import { HTMLAttributes } from "react";

const Footer = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className="overflow-hidden fixed flex justify-center py-[16px] px-[24px] left-0 bottom-0 w-full"
    >
      <div className="w-full max-w-[620px]">{props.children}</div>
    </div>
  );
};

export default Footer;
