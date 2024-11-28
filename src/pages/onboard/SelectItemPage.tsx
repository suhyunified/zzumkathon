// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import { useNavigate } from "react-router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";
import {
  IconChevronLeft,
  IconChevronRight,
  ImgDecoBallGreen,
  ImgDecoBallRed,
  ImgDecoBallYellow,
  ImgDecoBell,
  ImgDecoSocksGreen,
  ImgDecoSocksRed,
  ImgDecoStick,
} from "../../assets";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { PropsWithChildren, useContext } from "react";
import { OnboardContext } from "../../context/onboard";

const SelectItemPage = () => {
  const { setForm } = useContext(OnboardContext);

  const navigate = useNavigate();
  const items = [
    { id: 1, icon: <ImgDecoBallGreen width={200} /> },
    { id: 2, icon: <ImgDecoBallRed width={200} /> },
    { id: 3, icon: <ImgDecoBallYellow width={200} /> },
    { id: 4, icon: <ImgDecoBell width={200} /> },
    { id: 5, icon: <ImgDecoSocksGreen width={200} /> },
    { id: 6, icon: <ImgDecoSocksRed width={200} /> },
    { id: 7, icon: <ImgDecoStick width={200} /> },
  ];

  return (
    <React.Fragment>
      <NavBar />
      <Title
        title={
          <>
            트리 장식을
            <br /> 골라보세요
          </>
        }
      />
      <div className="relative">
        <div className=" w-full">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            onSlideChange={({ activeIndex }) =>
              setForm?.((prev) => ({ ...prev, itemType: activeIndex + 1 }))
            }
          >
            {items.map((item, index) => (
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                key={`deco-item${index}`}
              >
                {item.icon}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ChevronButton position="left">
          <IconChevronLeft />
        </ChevronButton>
        <ChevronButton position="right">
          <IconChevronRight />
        </ChevronButton>
      </div>

      <Footer>
        <Button onClick={() => navigate("/onboard/nickname")}>골랐어요</Button>
      </Footer>
    </React.Fragment>
  );
};

export default SelectItemPage;

const ChevronButton = ({
  position,
  children,
}: PropsWithChildren & { position: "left" | "right" }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: position === "left" ? 0 : "auto",
        right: position === "right" ? 0 : "auto",
      }}
    >
      {children}
    </div>
  );
};
