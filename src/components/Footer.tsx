import { HTMLAttributes } from "react";

const Footer = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className="overflow-hidden fixed flex justify-center  left-0 bottom-0 w-full"
    >
      <div
        className="w-full max-w-[620px] py-[16px] px-[24px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(43, 47, 52, 0.00) 0%, #2B2F34 42.05%)",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Footer;
