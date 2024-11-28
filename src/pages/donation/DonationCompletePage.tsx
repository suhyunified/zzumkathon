import React, { useContext } from "react";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

import { UserContext } from "../../context/user";
import { useNavigate } from "react-router";
import TreeWithMessageList from "../../components/TreeWithMessageList";
import Body from "../../components/Body";

const DonationCompletePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <React.Fragment>
      <NavBar />
      <Body>
        <Title
          title={
            <>
              {user?.username}님 덕분에
              <br />
              별이 더욱 빛나게 되었어요!
            </>
          }
        />
        <TreeWithMessageList step="after" />
      </Body>

      <Footer>
        <Button style={{ marginBottom: "16px" }}>친구에게 공유하기</Button>
        <button
          onClick={() => {
            navigate("/");
          }}
          style={{
            width: "100%",
            cursor: "pointr",
            borderRadius: "8px",
            color: "#B9C0C6",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          처음으로 돌아가기
        </button>
      </Footer>
    </React.Fragment>
  );
};

export default DonationCompletePage;
