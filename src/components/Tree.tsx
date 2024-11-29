import { AnimatePresence, motion } from "motion/react";
import { ImgStar } from "../assets";
import ImgTree from "../assets/img_tree.svg?react";
import { ITEMS } from "../constants";
import { Message } from "../type";

const POSITION = [
  { x: 157, y: 70 },
  { x: 80, y: 97 },
  { x: 195, y: 132 },
  { x: 131, y: 151 },
  { x: 41, y: 176 },
  { x: 113, y: 219 },
  { x: 195, y: 204 },
  { x: 59, y: 257 },
  { x: 166, y: 264 },
];
interface TreeProps {
  step: "onboard" | "before" | "after";
  messages: Message[];
}
const Tree = ({ step, messages }: TreeProps) => {
  return (
    <div style={{ position: "relative" }}>
      <style>
        {`
          @keyframes glow {
            0% {
                filter: drop-shadow(0 0 5px rgba(255, 255, 0, 0.5)) drop-shadow(0 0 10px rgba(255, 255, 0, 0.7));
            }
            100% {
                filter: drop-shadow(0 0 20px rgba(255, 255, 0, 0.9)) drop-shadow(0 0 30px rgba(255, 255, 0, 1));
            }
          }

          @keyframes flick {
            0%{
              scale: 0.9;
              filter: brightness(30%) grayScale(100%)
            }
            100%{
              scale: 1;
              filter: brightness(40%) grayScale(70%)
            }
          }
        `}
      </style>
      <div style={{ position: "absolute", left: "125px" }}>
        {step === "onboard" && <img src={ImgStar} />}
        {step === "before" && (
          <img
            src={ImgStar}
            style={{ animation: "flick 1s ease-out infinite alternate" }}
          />
        )}
        {step === "after" && (
          <img
            style={{
              filter: "drop-shadow(0 0 10px rgba(255, 255, 0, 0.8))",
              animation: "glow 2s infinite alternate",
            }}
            src={ImgStar}
          />
        )}
      </div>
      <AnimatePresence>
        {POSITION?.map((pos, index) => {
          if (!messages[index]) return <div></div>;
          return (
            <motion.div
              key={`${index}-${messages[index]?.content}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                position: "absolute",
                width: "46px",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                top: pos.y + "px",
                left: pos.x + "px",
              }}
            >
              {ITEMS?.[messages[index]?.itemType]?.small}
              <p
                key={index}
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "4px 8px",
                  borderRadius: "8px",
                }}
              >
                {messages[index]?.nickname}
              </p>
            </motion.div>
          );
        })}
      </AnimatePresence>
      <ImgTree />
    </div>
  );
};

export default Tree;
