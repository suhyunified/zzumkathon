import { useContext, useEffect, useState } from "react";
import MessageList from "./MessageList";
import Tree from "./Tree";
import { Message } from "../type";
import { UserContext } from "../context/user";
import { api } from "../api/axios";
import Text from "./Text";
import { IconChevronLeft, IconChevronRight } from "../assets";

interface TreeWithMessageListProps {
  step: "onboard" | "before" | "after";
}
const PAGE_SIZE = 9;
const TreeWithMessageList = ({ step }: TreeWithMessageListProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { user } = useContext(UserContext);
  const [page, setPage] = useState(0);
  const getMessages = async (userId: number) => {
    const response = await api.post("/message/trees", {
      userId: userId,
      treeId: 2,
    });

    setMessages(response.data.data);
  };

  const pageItems = messages.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  useEffect(() => {
    if (messages.length !== 0 || !user?.id) return;
    getMessages(user.id);
  }, [messages.length, user?.id]);

  if (messages.length === 0) return <div />;
  return (
    <>
      <div className="flex justify-center">
        <Tree step={step} messages={pageItems} />
      </div>
      <div className="my-[20px] mb-[16px]">
        <Text px={14} weight={600} align="center">
          {messages.length.toLocaleString()}명이 함께 꾸미는 중
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <div>
          {page !== 0 && (
            <IconChevronLeft
              style={{ width: "30px", height: "30px" }}
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
            />
          )}
        </div>
        <div>
          {page * PAGE_SIZE + PAGE_SIZE < messages.length && (
            <IconChevronRight
              style={{ width: "30px", height: "30px" }}
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            />
          )}
        </div>
      </div>
      <MessageList messages={pageItems} />
    </>
  );
};

export default TreeWithMessageList;
