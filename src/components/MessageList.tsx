import { useContext } from "react";

import Text from "./Text";
import { UserContext } from "../context/user";
import { Message } from "../type";

interface MessageListProps {
  messages: Message[];
}
const MessageList = ({ messages }: MessageListProps) => {
  const { user } = useContext(UserContext);
  return (
    <>
      {messages.map((message) => (
        <div style={{ display: "flex", marginBottom: "6px" }}>
          <div
            style={{
              marginRight: "16px",
              width: "60px",
              flexShrink: 0,
              color: "white",
            }}
          >
            <Text
              px={14}
              weight={700}
              color={user?.id === message?.userId ? "#96C1FF" : "white"}
            >
              {message.nickname}
            </Text>
          </div>
          <div style={{ marginRight: "16px" }}>
            <Text px={14} weight={400}>
              {message.content}
            </Text>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageList;
