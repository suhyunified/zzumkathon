import { PropsWithChildren } from "react";

const Body = ({ children }: PropsWithChildren) => {
  return <div className="px-[24px]">{children}</div>;
};

export default Body;
