import { useContext } from "react";
import { Message } from "../pages/CompletePage";
import Text from "./Text";
import { UserContext } from "../context/user";

interface MessageListProps {
  messages: Message[];
}
const MessageList = ({ messages }: MessageListProps) => {
  const { user } = useContext(UserContext);
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#3A4047",
        borderRadius: "16px",
        display: "flex",
        gap: "8px",
        flexDirection: "column",
        marginBottom: "120px",
      }}
    >
      {messages.map((message) => (
        <div style={{ display: "flex" }}>
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
              color={user?.id === message.userId ? "#96C1FF" : "white"}
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
    </div>
  );
};

export default MessageList;
