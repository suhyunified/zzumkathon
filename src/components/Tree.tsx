import { ImgStar, ImgStarGray } from "../assets";
import ImgTree from "../assets/img_tree.svg?react";
import { Message } from "../pages/CompletePage";

interface TreeProps {
  step: "onboard" | "before" | "after";
  messages: Message[];
}
const Tree = ({ step }: TreeProps) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <style>
        {`
          @keyframes glow {
            from {
              drop-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 
                          0 0 20px rgba(0, 255, 255, 0.6), 
                          0 0 30px rgba(0, 255, 255, 0.4);
            }
            to {
              drop-shadow: 0 0 20px rgba(0, 255, 255, 1), 
                          0 0 40px rgba(0, 255, 255, 0.8), 
                          0 0 60px rgba(0, 255, 255, 0.6);
            }
          }
        `}
      </style>
      <div style={{ position: "absolute", left: "125px" }}>
        {step === "onboard" && <ImgStar />}
        {step === "before" && <ImgStarGray />}
        {step === "after" && (
          <ImgStar
            style={{
              filter: "drop-shadow(0 0 10px rgba(255, 255, 0, 0.8))",
              width: "150px",
              height: "150px",
              backgroundColor: "blue",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "18px",
              textAlign: "center",
            }}
          />
        )}
      </div>
      <ImgTree />
    </div>
  );
};

export default Tree;
