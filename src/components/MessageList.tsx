import { Message } from "../pages/CompletePage";
import Text from "./Text";

interface MessageListProps {
  messages: Message[];
}
const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#3A4047",
        borderRadius: "16px",
        display: "flex",
        gap: "8px",
        flexDirection: "column",
      }}
    >
      {messages.map((message) => (
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "16px", width: "60px", color: "white" }}>
            <Text px={14} weight={700}>
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
