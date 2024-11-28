import { useNavigate } from "react-router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";

const SelectItemPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Title
        title={
          <>
            트리 장식을
            <br /> 골라보세요
          </>
        }
      />
      <Footer>
        <Button onClick={() => navigate("/onboard/item")}>골랐어요</Button>
      </Footer>
    </>
  );
};

export default SelectItemPage;
