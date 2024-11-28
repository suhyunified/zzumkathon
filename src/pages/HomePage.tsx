import Button from "../components/Button";
import Footer from "../components/Footer";
import Text from "../components/Text";

const HomePage = () => {
  return (
    <div>
      <Text px={26} weight={700} align="center" className="mb-[12px]">
        함께 만드는
        <br /> 크리스마스 트리
      </Text>
      <Text px={16} weight={500} align="center" color="#B9C0C6">
        트리를 꾸미면 삼쩜삼이 OOO원 기부해요
      </Text>
      <Footer>
        <Button>트리 꾸미러 가기</Button>
      </Footer>
    </div>
  );
};

export default HomePage;
