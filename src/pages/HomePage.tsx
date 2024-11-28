import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Text from "../components/Text";
import { useNavigate } from "react-router";
import "./HomePage.css";
import CanGif from "./Can.gif"; // Import GIF

const HomePage = () => {
    const navigate = useNavigate();
    const animationRef = useRef<HTMLParagraphElement | null>(null); // Ref for animation
    const [gifVisible, setGifVisible] = useState(false);
    const [message, setMessage] = useState("");

    // Track the sequence of keys pressed
    const [keySequence, setKeySequence] = useState<string[]>([]);
    const sequenceToMatch = ["ArrowDown", "ArrowRight", "ArrowDown", "ArrowRight"];
    const sequenceTimeout = 1000; // Max time interval between key presses (1 second)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

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
            <NavBar />
            <div className="px-[24px] pb-[40px]">
                <Text
                    px={26}
                    weight={700}
                    align="center"
                    ref={animationRef} // Attach ref here
                >
                    함께 만드는
                    <br /> 크리스마스 트리
                </Text>
                <Text px={16} weight={500} align="center" color="#B9C0C6">
                    트리를 꾸미면 삼쩜삼이 OOO원 기부해요
                </Text>
                {message && (
                    <Text px={16} weight={700} align="center" color="#34D399">
                        {message}
                    </Text>
                )}
                {/* Conditionally render the GIF */}
                {gifVisible && (
                    <div className="gif-container">
                        <img
                            src={CanGif} // Use imported GIF path
                            alt="Celebration GIF"
                            className="gif"
                        />
                    </div>
                )}
            </div>
            <Footer>
                <Button onClick={() => navigate("/onboard/item")}>
                    트리 꾸미러 가기
                </Button>
            </Footer>
        </>
    );
};

export default HomePage;
