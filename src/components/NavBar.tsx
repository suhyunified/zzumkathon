import { useNavigate } from "react-router";
import IconLeftArrow from "../assets/icon_left_arrow.svg?react";

const NavBar = ({ title }: { title?: string }) => {
  return (
    <div className="fixed top-0 left-0 h-[56px] w-full flex items-center px-[12px] py-[4px] bg-[#2b2f34] z-10">
      <div className="flex w-full max-w-[620px]">
        <div className="flex-1">
          <BackButton />
        </div>
        <div className="flex-1 flex items-center justify-center text-white font-bold text-[16px]">
          {title}
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default NavBar;

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="p-[12px] flex items-center justify-center"
    >
      <IconLeftArrow />
    </button>
  );
};
