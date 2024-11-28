import { useNavigate } from "react-router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Input from "../../components/Input";
import { useState } from "react";
import Body from "../../components/Body";

const NicknamePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  return (
    <>
      <NavBar />
      <Title title="닉네임을 알려주세요" subTitle="트리 장식에 표시될 거예요" />
      <Body>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={5}
          subTitle="최대 5자 입력 가능"
        />
      </Body>
      <Footer>
        <Button
          disabled={name.trim().length === 0}
          onClick={() => navigate("/onboard/comment")}
        >
          다음
        </Button>
      </Footer>
    </>
  );
};

export default NicknamePage;
