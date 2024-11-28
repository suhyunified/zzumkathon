// Import Swiper styles

import { useNavigate } from "react-router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { IconChevronLeft, IconChevronRight } from "../../assets";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import React, { PropsWithChildren, useContext, useRef } from "react";
import { OnboardContext } from "../../context/onboard";
import { ITEMS } from "../../constants";

const SelectItemPage = () => {
  const { form, setForm } = useContext(OnboardContext);
  const swiperRef = useRef<SwiperClass | null>(null);

  const navigate = useNavigate();

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
              setForm?.((prev) => ({ ...prev, itemType: activeIndex }))
            }
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {ITEMS.map((item, index) => (
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                key={`deco-item${index}`}
              >
                <div
                  style={{
                    width: "204px",
                  }}
                >
                  {item.icon}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {form.itemType !== 0 && (
          <ChevronButton
            position="left"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IconChevronLeft />
          </ChevronButton>
        )}
        {form.itemType !== ITEMS.length - 1 && (
          <ChevronButton
            position="right"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <IconChevronRight />
          </ChevronButton>
        )}
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
  onClick,
}: PropsWithChildren & { position: "left" | "right"; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        cursor: "pointer",
        top: "50%",
        transform: "translateY(-50%)",
        left: position === "left" ? 0 : "auto",
        right: position === "right" ? 0 : "auto",
        zIndex: 10,
      }}
    >
      {children}
    </button>
  );
};
