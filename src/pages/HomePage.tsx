import Button from "../components/Button";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Text from "../components/Text";
import { useNavigate } from "react-router";
import Tree from "../components/Tree";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="px-[24px] pb-[40px]">
        <Text px={26} weight={700} align="center">
          함께 트리 꾸미기
        </Text>
        <Text px={16} weight={500} align="center" color="#B9C0C6">
          귀여운 장식으로 트리를 꾸미고
          <br />
          기부로 따뜻한 마음을 나눠보세요
        </Text>
      </div>
      <div className="flex justify-center">
        <Tree />
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
