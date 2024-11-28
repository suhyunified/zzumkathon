import React, { useContext } from "react";
import NavBar from "../../components/NavBar";
import Body from "../../components/Body";
import Text from "../../components/Text";

import { UserContext } from "../../context/user";
import { formatPhoneNumber } from "../../utils";

const DonationHistory = () => {
  const { user } = useContext(UserContext);
  const amount = localStorage.getItem("amount");

  return (
    <React.Fragment>
      <NavBar title="기부 내역" />
      <Body>
        <div
          style={{
            display: "flex",
            margin: "16px 0 24px 0",
            padding: "16px 20px",
            backgroundColor: "#33383E",
            borderRadius: "16px",
          }}
        >
          <Text px={14} weight={400} color="white">
            환불이 필요하시다면
            <br />
            고객센터로 문의해주세요.
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 0",
          }}
        >
          <Text px={16} weight={400} color="#B9C0C6">
            이름
          </Text>
          <Text px={16} weight={500} color="white">
            {user?.username}
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 0",
          }}
        >
          <Text px={16} weight={400} color="#B9C0C6">
            휴대폰 번호
          </Text>
          <Text px={16} weight={500} color="white">
            {formatPhoneNumber(user?.mobileNo || "")}
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 0",
          }}
        >
          <Text px={16} weight={400} color="#B9C0C6">
            결제금액
          </Text>
          <Text px={16} weight={500} color="white">
            {Number(amount).toLocaleString()}
          </Text>
        </div>
      </Body>
    </React.Fragment>
  );
};

export default DonationHistory;
