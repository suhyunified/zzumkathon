import { useNavigate, useSearchParams } from "react-router";
import Button from "../../components/Button";
import { api } from "../../api/axios";
import { useCallback, useEffect, useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/login",
    });
  };

  const token = searchParams.get("code");

  const login = useCallback(
    async (authorizeCode: string) => {
      if (isLoading) return;
      try {
        const response = await api.post("/user/kakao/login", {
          authorizeCode,
        });
        console.log(response.data.data);
        localStorage.setItem("user", JSON.stringify(response.data.data));
      } finally {
        navigate("/");
        //   setIsLoading(false);
      }
    },
    [isLoading, navigate]
  );

  useEffect(() => {
    if (!token || isLoading) return;
    setIsLoading(true);
    login(token);
  }, [isLoading, login, token]);

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
