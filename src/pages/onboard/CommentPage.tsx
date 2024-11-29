import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Input from "../../components/Input";
import React, { useContext } from "react";
import Body from "../../components/Body";
import { OnboardContext } from "../../context/onboard";
import { api } from "../../api/axios";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/user";

const CommentPage = () => {
  const { form, setForm } = useContext(OnboardContext);
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const navigate = useNavigate();

  const saveMessage = async () => {
    await api.post(`/message/tree/messages`, {
      content: form.message,
      userId: user?.id,
      nickname: form.name,
      itemType: form.itemType,
      treeId: 2,
    });
    setUser?.((prev) => ({ ...prev, nickname: form.name }));
  };

  const handleSubmit = async () => {
    try {
      await saveMessage();
      navigate("/complete");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
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
          autoFocus
          value={form.message}
          onChange={(e) =>
            setForm?.((prev) => ({ ...prev, message: e.target.value }))
          }
          maxLength={20}
          subTitle="최대 20자 입력 가능"
        />
      </Body>

      <Footer>
        <Button disabled={form.message.length === 0} onClick={handleSubmit}>
          완료
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default CommentPage;
