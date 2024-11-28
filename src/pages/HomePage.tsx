import Button from "../components/Button";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Text from "../components/Text";
import { useNavigate } from "react-router";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="px-[24px] pb-[40px]">
        <Text px={26} weight={700} align="center">
          함께 만드는
          <br /> 크리스마스 트리
        </Text>
        <Text px={16} weight={500} align="center" color="#B9C0C6">
          트리를 꾸미면 삼쩜삼이 OOO원 기부해요
        </Text>
      </div>
      <Footer>
        <Button onClick={() => navigate("/onboard/item")}>
          트리 꾸미러 가기
        </Button>
      </Footer>
    </>
  );
};

export default HomePage;
