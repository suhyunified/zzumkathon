import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Body from "../../components/Body";
import Title from "../../components/Title";
import { IconItem1, IconItem2, IconItem3 } from "../../assets";
import Text from "../../components/Text";
import { useNavigate } from "react-router";

const DonationOnboardPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{}}>
      <NavBar />
      <Body>
        <Title
          title={
            <>
              기부로 마음을 전하면
              <br />
              별이 빛날 수 있어요
            </>
          }
        />
        <div style={{ height: "100px" }} />
        <ContentBox
          icon={<IconItem3 />}
          message={
            <>
              기부금은 유니세프를 통해
              <br />
              도움이 필요한 아동에게 전달돼요
            </>
          }
        />
        <ContentBox
          icon={<IconItem1 />}
          message={
            <>
              기부금의 15%는 세액공제되어
              <br />
              연말정산에서 환급받아요
            </>
          }
        />
        <ContentBox
          icon={<IconItem2 />}
          message={<>기부하시면 1000 포인트 드려요</>}
        />
      </Body>

      <Footer>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Button
            style={{
              backgroundColor: "#E9F2FF",
              color: "#3A88F4",
            }}
            onClick={() => history.back()}
          >
            다음에 할게요
          </Button>
          <Button onClick={() => navigate("/donation/form")}>기부하기</Button>
        </div>
      </Footer>
    </div>
  );
};

export default DonationOnboardPage;

const ContentBox = ({
  icon,
  message,
}: {
  icon: React.ReactNode;
  message: React.ReactNode;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px 16px",
        background: "rgba(0, 0, 0, 0.60)",
        borderRadius: "16px",
        border: "1px solid #3A4047",
        marginBottom: "16px",
      }}
    >
      <div style={{ marginRight: "16px" }}>{icon}</div>
      <Text px={16} weight={500}>
        {message}
      </Text>
    </div>
  );
};
