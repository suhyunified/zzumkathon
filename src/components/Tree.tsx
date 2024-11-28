import { ImgStar, ImgStarGray } from "../assets";
import ImgTree from "../assets/img_tree.svg?react";
import { ITEMS } from "../constants";
import { Message } from "../pages/CompletePage";

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
        `}
      </style>
      <div style={{ position: "absolute", left: "125px" }}>
        {step === "onboard" && <img src={ImgStar} />}
        {step === "before" && <img src={ImgStarGray} />}
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
      {POSITION?.map((pos, index) => {
        return (
          <div
            style={{
              position: "absolute",
              width: "46px",
              height: "auto",

              top: pos.y + "px",
              left: pos.x + "px",
            }}
          >
            {ITEMS?.[messages[index]?.itemType]?.icon}
          </div>
        );
      })}
      <ImgTree />
    </div>
  );
};

export default Tree;
