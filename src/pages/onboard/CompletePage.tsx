import { useNavigate } from "react-router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";

const CompletePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Title
        title={
          <>
            짠! 도로로님 덕분에
            <br />
            트리가 더 풍성해졌어요
          </>
        }
      />

      <Footer>
        <Button onClick={() => navigate("/onboard/complete")}>완료</Button>
      </Footer>
    </>
  );
};

export default CompletePage;
