import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

import Tree from "../../components/Tree";
import { UserContext } from "../../context/user";
import { api } from "../../api/axios";
import { Message } from "../../type";
import MessageList from "../../components/MessageList";
import Text from "../../components/Text";

const DonationCompletePage = () => {
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
    if (messages.length !== 0 || !user?.id) return;

    getMessages(user.id);
  }, [messages.length, user?.id]);

  console.log(messages);
  if (messages.length === 0) return <div />;
  return (
    <React.Fragment>
      <NavBar />
      <Title
        title={
          <>
            {user?.username}님 덕분에
            <br />
            별이 더욱 빛나게 되었어요!
          </>
        }
      />
      <div className="flex justify-center">
        <Tree step="after" messages={messages} />
      </div>
      <div className="my-[20px] mb-[16px]">
        <Text px={14} weight={600} align="center">
          {messages.length.toLocaleString()}명이 함께 꾸미는 중
        </Text>
      </div>

      <MessageList messages={messages} />

      <Footer>
        <Button
          onClick={() => {
            // Kakao.Share.sendDefault();
          }}
        >
          친구에게 공유하기
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default DonationCompletePage;
