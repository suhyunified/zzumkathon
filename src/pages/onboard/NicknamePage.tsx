import { useNavigate } from "react-router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Input from "../../components/Input";
import React, { useContext } from "react";
import Body from "../../components/Body";
import { OnboardContext } from "../../context/onboard";

const NicknamePage = () => {
  const navigate = useNavigate();
  const { form, setForm } = useContext(OnboardContext);
  return (
    <React.Fragment>
      <NavBar />
      <Title title="닉네임을 알려주세요" subTitle="트리 장식에 표시될 거예요" />
      <Body>
        <Input
          value={form.name}
          onChange={(e) =>
            setForm?.((prev) => ({ ...prev, name: e.target.value }))
          }
          maxLength={3}
          subTitle="최대 3자 입력 가능"
        />
      </Body>
      <Footer>
        <Button
          disabled={form.name.length === 0}
          onClick={() => navigate("/onboard/comment")}
        >
          다음
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default NicknamePage;
