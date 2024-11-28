import { useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Title from "../components/Title";
import React from "react";
import Tree from "../components/Tree";

const CompletePage = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
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
      <div className="flex justify-center">
        <Tree />
      </div>

      <Footer>
        <Button onClick={() => navigate("/onboard/complete")}>완료</Button>
      </Footer>
    </React.Fragment>
  );
};

export default CompletePage;
