import { useSearchParams } from "react-router";
import Button from "../../components/Button";
import { api } from "../../api/axios";
import { useEffect } from "react";

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/login",
    });
  };
  const token = searchParams.get("code");

  //   displayToken();

  const login = async (authorizeCode: string) => {
    const response = await api.post("/user/kakao/login", {
      authorizeCode,
    });
    console.log(response);
  };

  useEffect(() => {
    if (!token) return;

    login(token);
  }, [token]);

  //   useEffect(() => {
  //     if (to)
  //     await api.post('/user/kakao/login', {authorizeCode : token})
  //   },[])

  //   function displayToken() {
  //     const token = searchParams.get("code");

  //     // console.log(token);
  //     // if (token) {
  //     //   Kakao.Auth.setAccessToken(token);
  //     //   Kakao.Auth.getStatusInfo()
  //     //     .then(function (res) {
  //     //       console.log("hihi", res);
  //     //       if (res.status === "connected") {
  //     //         document.getElementById("token-result").innerText =
  //     //           "login success, token: " + Kakao.Auth.getAccessToken();
  //     //       }
  //     //     })
  //     //     .catch(function (err) {
  //     //       Kakao.Auth.setAccessToken(null);
  //     //     });
  //     // }
  //   }

  return (
    <div>
      <Button onClick={() => loginWithKakao()}>카카오 로그인</Button>
    </div>
  );
};

export default LoginPage;
