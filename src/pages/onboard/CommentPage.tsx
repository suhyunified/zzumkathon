import { useNavigate } from "react-router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Input from "../../components/Input";
import { useState } from "react";
import Body from "../../components/Body";

const CommentPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  return (
    <>
      <NavBar />
      <Title
        title={
          <>
            트리를 꾸미는 분들에게
            <br />
            따뜻한 말을 남겨주세요
          </>
        }
      />
      <Body>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={20}
          subTitle="최대 20자 입력 가능"
        />
      </Body>

      <Footer>
        <Button
          disabled={message.trim().length === 0}
          onClick={() => navigate("/onboard/complete")}
        >
          완료
        </Button>
      </Footer>
    </>
  );
};

export default CommentPage;
