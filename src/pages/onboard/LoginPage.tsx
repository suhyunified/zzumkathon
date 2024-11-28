import { useNavigate, useSearchParams } from "react-router";
import Button from "../../components/Button";
import { api } from "../../api/axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user";

const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const token = searchParams.get("code");

  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/login",
    });
  };

  const login = useCallback(
    async (authorizeCode: string) => {
      try {
        const response = await api.post("/user/kakao/login", {
          authorizeCode,
        });

        setUser?.(response.data.data);
        localStorage.setItem("user", JSON.stringify(response.data.data));
      } finally {
        navigate("/");
      }
    },
    [navigate, setUser]
  );

  useEffect(() => {
    if (!token || isLoading) return;
    setIsLoading(true);
    login(token);
  }, [isLoading, login, token]);

  if (token || isLoading) return <React.Fragment />;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button onClick={() => loginWithKakao()}>용재해라 접속</Button>
    </div>
  );
};

export default LoginPage;
