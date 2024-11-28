import React, { useContext, useState } from "react";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import Input from "../../components/Input";
import { api } from "../../api/axios";
import { UserContext } from "../../context/user";
import { useNavigate } from "react-router";
import Body from "../../components/Body";

const DonationFormPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<{
    amount: number;
    name: string;
    mobilNo: string;
  }>({ amount: 0, name: "", mobilNo: "" });
  const { user, setUser } = useContext(UserContext);
  const updatePhoneNumber = async () => {
    await api.put(`/user/${user?.id}`, {
      mobilNo: form.mobilNo,
    });
  };

  const postDonation = async () => {
    await api.post("/donation", {
      userId: user?.id,
      amount: form.amount,
      username: form.name,
    });
  };

  const updateUser = async () => {
    setUser?.((prev) => {
      const nextValue = {
        ...prev,
        mobileNo: form.mobilNo,
        freeTier: true,
      };
      localStorage.setItem("user", JSON.stringify(nextValue));
      localStorage.setItem("amount", form.amount.toString());
      return nextValue;
    });
  };

  const handleSubmit = async () => {
    await updatePhoneNumber();
    await postDonation();
    await updateUser();
    (document.getElementById("jingle-bell") as HTMLAudioElement).play();
    navigate("/donation/complete");
  };

  const isDisabled =
    form.amount < 1000 || form.name.length === 0 || form.mobilNo.length === 0;

  return (
    <React.Fragment>
      <NavBar />
      <Body>
        <Title
          title={
            <>
              기부에 필요한 정보를
              <br />
              입력해주세요
            </>
          }
        />
        <div style={{ height: "40px" }} />
        <Input
          placeholder="기부금액"
          value={form.amount ? `${form.amount}` : ""}
          style={{ textAlign: "left" }}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              amount: Number(e.target.value.replace(/[^0-9]/g, "")),
            }));
          }}
        />
        <div style={{ height: "40px" }} />
        <Input
          placeholder="이름"
          style={{ textAlign: "left" }}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <div style={{ height: "40px" }} />
        <Input
          placeholder="휴대폰번호"
          style={{ textAlign: "left" }}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, mobilNo: e.target.value }))
          }
        />
      </Body>
      <Footer>
        <Button disabled={isDisabled} onClick={handleSubmit}>
          기부하기
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default DonationFormPage;
