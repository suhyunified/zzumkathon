import { useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Title from "../components/Title";
import React, { useContext, useEffect, useState } from "react";
import Tree from "../components/Tree";
import Text from "../components/Text";
import { api } from "../api/axios";
import MessageList from "../components/MessageList";
import { UserContext } from "../context/user";

export type Message = {
  id: number;
  content: string;
  nickname: string;
  itemType: number;
};

const CompletePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);

  const getMessages = async () => {
    const response = await api.post("/message/trees", {
      userId: user?.id,
      treeId: 2,
    });
    setMessages(response.data.data);
  };

  useEffect(() => {
    if (messages.length !== 0) return;
    getMessages();
  }, []);

  console.log(messages);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(1);
    }, 2000);

    const timer2 = setTimeout(() => {
      setStep(2);
    }, 4000);

    return () => {
      if (timer) clearTimeout(timer);
      if (timer2) clearTimeout(timer2);
    };
  }, []);
  return (
    <React.Fragment>
      {step === 1 && <Blur />}
      <NavBar />
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
              짠! 도로로님 덕분에
              <br />
              트리가 더 풍성해졌어요
            </>
          )
        }
      />
      <div className="flex justify-center">
        <Tree step={step === 0 ? "onboard" : "before"} messages={messages} />
      </div>

      <MessageList messages={messages} />

      {step === 2 && (
        <Footer>
          <Button onClick={() => navigate("/donation")}>별 도와주기</Button>
        </Footer>
      )}
    </React.Fragment>
  );
};

export default CompletePage;

const Blur = () => {
  return (
    <div
      style={{
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
