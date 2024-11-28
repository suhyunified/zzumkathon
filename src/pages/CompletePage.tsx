import { useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Title from "../components/Title";
import React, { useContext, useEffect, useRef, useState } from "react";
import Text from "../components/Text";
import { api } from "../api/axios";
import { UserContext } from "../context/user";
import Body from "../components/Body";
import TreeWithMessageList from "../components/TreeWithMessageList";

export type Message = {
  id: number;
  content: string;
  nickname: string;
  itemType: number;
  userId: number;
};

const CompletePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const getMessages = async (userId: number) => {
    const response = await api.post("/message/trees", {
      userId: userId,
      treeId: 2,
    });

    setMessages(response.data.data);
  };

  useEffect(() => {
    if (messages.length !== 0 || !user?.id) return;

    getMessages(user.id);
  }, [messages.length, user?.id]);

  useEffect(() => {
    if (messages.length === 0) return;
    const timer = setTimeout(() => {
      setStep(1);
      window.scrollTo(0, 0);
      const audioTag = document.getElementById(
        "jingle-bell"
      ) as HTMLAudioElement;
      audioTag.pause();
      audioTag.currentTime = 0;
      audioRef.current?.play();
    }, 4000);

    const timer2 = setTimeout(() => {
      setStep(2);
    }, 7000);

    return () => {
      if (timer) clearTimeout(timer);
      if (timer2) clearTimeout(timer2);
    };
  }, [messages.length]);

  if (messages.length === 0) return <div />;

  return (
    <React.Fragment>
      <audio ref={audioRef} src="/effect.mp3" preload="auto" />

      <Blur visible={step === 1} />
      <NavBar />
      <Body>
        <Title
          title={
            step === 2 ? (
              <>
                별이 빛날 수 있도록
                <br />
                도와주세요!
              </>
            ) : (
              <>
                짠! {user?.username}님 덕분에
                <br />
                트리가 더 풍성해졌어요
              </>
            )
          }
        />
        <TreeWithMessageList step={step === 0 ? "onboard" : "before"} />
      </Body>
      {step === 2 && (
        <Footer>
          <Button onClick={() => navigate("/donation/onboard")}>
            별 도와주기
          </Button>
        </Footer>
      )}
    </React.Fragment>
  );
};

export default CompletePage;

const Blur = ({ visible }: { visible: boolean }) => {
  return (
    <div
      style={{
        transitionDuration: "0.5s",
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        background: "rgba(0, 0, 0, 0.60)",
        backdropFilter: "blur(10px)",
        zIndex: 100,
      }}
    >
      <Text px={26} weight={700} align="center">
        어라 ? <br />
        별빛이 약해졌어요...!
      </Text>
    </div>
  );
};
