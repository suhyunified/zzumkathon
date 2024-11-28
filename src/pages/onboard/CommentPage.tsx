import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Input from "../../components/Input";
import { useContext } from "react";
import Body from "../../components/Body";
import { OnboardContext } from "../../context/onboard";
import { api } from "../../api/axios";

const CommentPage = () => {
  const { form, setForm } = useContext(OnboardContext);

  const saveNickName = async () => {
    await api.put("/user/2", {
      username: form.name,
    });
  };

  const makeTree = async () => {
    const response = await api.post("/tree", {
      userId: 2,
      treeName: form.name,
      treeDescription: form.message,
    });
    return response;
  };

  const saveMessage = async (id: string) => {
    await api.post(`/message/${id}/messages`, {
      content: form.message,
      userId: 2,
    });
  };

  const handleSubmit = async () => {
    try {
      await saveNickName();
      const response = await makeTree();
      await saveMessage(response.data.id);
    } catch (e) {
      console.log(e);
    }
  };

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
    </>
  );
};

export default CommentPage;
