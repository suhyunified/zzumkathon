import React from "react";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import Tree from "../../components/Tree";

const DonationCompletePage = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <NavBar />
      <Title
        title={
          <>
            김점삼님 덕분에
            <br />
            별이 더욱 빛나게 되었어요!
          </>
        }
      />
      <div className="flex justify-center">
        <Tree step="after" messages={[]} />
      </div>

      {/* <MessageList messages={messages} /> */}

      <Footer>
        <Button onClick={() => navigate("/onboard/complete")}>
          친구에게 공유하기
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default DonationCompletePage;
