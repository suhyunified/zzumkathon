import Button from "../components/Button";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Text from "../components/Text";
import { useNavigate } from "react-router";
import Tree from "../components/Tree";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";
import { Message } from "../type";
import { api } from "../api/axios";
import Body from "../components/Body";
import MessageList from "../components/MessageList";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState<Message[]>([]);

  const getMessages = async (userId: number) => {
    const response = await api.post("/message/trees", {
      userId: userId,
      treeId: 2,
    });
    console.log(response.data.data);
    setMessages(response.data.data);
  };

  useEffect(() => {
    if (messages.length !== 0 || !user?.id) return;
    console.log("hi");
    getMessages(user.id);
  }, [messages.length, user?.id]);

  return (
    <React.Fragment>
      <NavBar />
      <Body>
        <div className="px-[24px] pb-[40px]">
          <Text px={26} weight={700} align="center">
            함께 트리 꾸미기
          </Text>
          <Text px={16} weight={500} align="center" color="#B9C0C6">
            귀여운 장식으로 트리를 꾸미고
            <br />
            기부로 따뜻한 마음을 나눠보세요
          </Text>
        </div>
        <div className="flex justify-center">
          <Tree
            step={user?.freeTier ? "after" : "before"}
            messages={messages}
          />
        </div>
        <div className="my-[20px] mb-[16px]">
          <Text px={14} weight={600} align="center">
            {messages.length.toLocaleString()}명이 함께 꾸미는 중
          </Text>
        </div>
        <MessageList messages={messages} />
      </Body>
      <Footer>
        <Button onClick={() => navigate("/onboard/item")}>
          트리 꾸미러 가기
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default HomePage;
