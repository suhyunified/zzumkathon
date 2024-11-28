import CanGif from "../assets/Can.gif"; // Import GIF

import { useEffect, useState } from "react";
const sequenceToMatch = ["ArrowDown", "ArrowRight", "ArrowDown", "ArrowRight"];

const Adogen = () => {
  const [gifVisible, setGifVisible] = useState(false);
  const [, setKeySequence] = useState<string[]>([]);

  const sequenceTimeout = 1000; // Max time interval between key presses (1 second)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleKeyDown = (event: KeyboardEvent) => {
      setKeySequence((prevSequence) => {
        const updatedSequence = [...prevSequence, event.key];

        // Check if the sequence matches
        if (
          updatedSequence.length === sequenceToMatch.length &&
          updatedSequence.join(",") === sequenceToMatch.join(",")
        ) {
          setGifVisible(true); // Show GIF
          setTimeout(() => setGifVisible(false), 3000); // Hide GIF after 3 seconds
          return [];
        }

        // Reset the sequence if it gets too long or does not match
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setKeySequence([]), sequenceTimeout);

        return updatedSequence.slice(-sequenceToMatch.length); // Keep only the last `n` keys
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {gifVisible && (
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            zIndex: 100,
            background: "rgba(0, 0, 0, 0.60)",
            backdropFilter: "blur(10px)",
          }}
        >
          <img
            src={CanGif} // Use imported GIF path
            alt="Celebration GIF"
            className="gif"
          />
        </div>
      )}
    </>
  );
};

export default Adogen;
