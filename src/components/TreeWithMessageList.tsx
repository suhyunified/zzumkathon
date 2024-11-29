import { useContext, useEffect, useState } from "react";
import MessageList from "./MessageList";
import Tree from "./Tree";
import { Message } from "../type";
import { UserContext } from "../context/user";
import { api } from "../api/axios";
import Text from "./Text";
import { Swiper, SwiperSlide } from "swiper/react";

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

  function chunkArray<T>(array: T[]): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += PAGE_SIZE) {
      result.push(array.slice(i, i + PAGE_SIZE));
    }
    return result;
  }

  const pageItems = chunkArray(messages);

  useEffect(() => {
    if (messages.length !== 0 || !user?.id) return;
    getMessages(user.id);
  }, [messages.length, user?.id]);

  if (messages.length === 0) return <div />;
  return (
    <>
      <div className="flex justify-center">
        <Tree step={step} messages={pageItems[page]} />
      </div>
      <div className="my-[20px] mb-[16px]">
        <Text px={14} weight={600} align="center">
          {messages.length.toLocaleString()}명이 함께 꾸미는 중
        </Text>
      </div>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#3A4047",
          borderRadius: "16px",
          display: "flex",
          gap: "8px",
          zIndex: 0,
          flexDirection: "column",
        }}
      >
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            onSlideChange={({ activeIndex }) => setPage(activeIndex)}
          >
            {pageItems.map((pageItem) => (
              <SwiperSlide>
                <MessageList messages={pageItem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            backgroundColor: "#141618",
            borderRadius: "16px",
            padding: "3px 6px",
            color: "#788391",
            fontSize: "12px",
          }}
        >
          <span
            style={{
              color: "white",
            }}
          >
            {page + 1}
          </span>{" "}
          /{" "}
          {messages.length % PAGE_SIZE === 0
            ? messages.length / PAGE_SIZE
            : Math.floor(messages.length / PAGE_SIZE) + 1}
        </div>
      </div>
    </>
  );
};

export default TreeWithMessageList;
