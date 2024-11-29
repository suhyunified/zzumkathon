import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Text from "../components/Text";
import { useNavigate } from "react-router";

import { UserContext } from "../context/user";
import { Message } from "../type";
import { api } from "../api/axios";
import Body from "../components/Body";
import TreeWithMessageList from "../components/TreeWithMessageList";
import React from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState<Message[]>([]);

  const getMessages = async (userId: number) => {
    const response = await api.post("/message/trees", {
      userId: userId,
      treeId: 2,
    });

    setMessages(response.data.data);
  };

  useEffect(() => {
    if (messages.length !== 0) return;
    if (!user?.id) {
      navigate("/login");
      return;
    }

    getMessages(user.id);
  }, [messages.length, navigate, user?.id]);

  if (messages.length === 0) return <div />;

  return (
    <React.Fragment>
      <NavBar />
      <Body>
        <div className="px-[24px] pb-[40px]">
          <Text px={26} weight={700} align="center">
            함께 트리 꾸미기
          </Text>
          {user?.freeTier ? (
            <Text px={16} weight={500} align="center" color="#B9C0C6">
              {user.nickname}님의 기부 덕분에 세상이 밝아졌어요!
              <br />
            </Text>
          ) : (
            <Text px={16} weight={500} align="center" color="#B9C0C6">
              귀여운 장식으로 트리를 꾸미고
              <br />
              기부로 따뜻한 마음을 나눠보세요
            </Text>
          )}
        </div>

        <TreeWithMessageList step={user?.freeTier ? "after" : "onboard"} />
      </Body>
      <Footer>
        {user?.freeTier ? (
          <Button onClick={() => navigate("/donation/history")}>
            기부 내역 확인하기
          </Button>
        ) : (
          <Button
            onClick={() => {
              (
                document.getElementById("jingle-bell") as HTMLAudioElement
              ).play();
              navigate("/onboard/item");
            }}
          >
            트리 꾸미러 가기
          </Button>
        )}
      </Footer>
    </React.Fragment>
  );
};

export default HomePage;
