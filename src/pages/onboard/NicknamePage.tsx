import { useNavigate } from "react-router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";

const NicknamePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Title title="닉네임을 알려주세요" subTitle="트리 장식에 표시될 거예요" />
      <Footer>
        <Button onClick={() => navigate("/onboard/comment")}>다음</Button>
      </Footer>
    </>
  );
};

export default NicknamePage;
