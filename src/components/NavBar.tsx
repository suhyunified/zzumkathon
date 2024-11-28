import { useNavigate } from "react-router";
import IconLeftArrow from "../assets/icon_left_arrow.svg?react";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 h-[56px] w-full flex items-center px-[12px] py-[4px] bg-[#2b2f34] z-10">
      <div className="w-full max-w-[620px]">
        <BackButton />
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
      className="p-[24px] flex items-center justify-center"
    >
      <IconLeftArrow />
    </button>
  );
};
