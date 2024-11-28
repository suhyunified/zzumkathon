import { useNavigate } from "react-router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";

const CommentPage = () => {
  const navigate = useNavigate();
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
      <Footer>
        <Button onClick={() => navigate("/onboard/complete")}>완료</Button>
      </Footer>
    </>
  );
};

export default CommentPage;
