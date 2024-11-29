import { useNavigate, useSearchParams } from "react-router";
import Button from "../../components/Button";
import { api } from "../../api/axios";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { UserContext } from "../../context/user";
import Footer from "../../components/Footer";
import { Img1, Img1Click, Img2, Img3, Img4 } from "../../assets";
import Text from "../../components/Text";

const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const token = searchParams.get("code");
  const [isClick, setIsClick] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const loginWithKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: import.meta.env.VITE_REDIRECT_URI,
    });
  };

  const login = useCallback(
    async (authorizeCode: string) => {
      try {
        const response = await api.post(import.meta.env.VITE_LOGIN_API, {
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
        flexDirection: "column",
      }}
    >
      <audio ref={audioRef} src="/용재해라.mp3" />
      <div style={{ display: "flex" }}>
        <div>
          {isClick ? (
            <img src={Img1Click} />
          ) : (
            <Img1
              onClick={() => {
                setIsClick(true);
              }}
            />
          )}
        </div>
        <Img2 />
      </div>
      <div>
        <Text px={20} weight={700} align="center">
          TEAM
        </Text>
        <Text
          px={40}
          weight={700}
          onClick={() => {
            audioRef.current?.pause();
            audioRef.current!.currentTime = 0;
            audioRef.current?.play();
          }}
        >
          용재해라
        </Text>
      </div>
      <div style={{ display: "flex" }}>
        <Img3 />
        <Img4 />
      </div>
      <Footer>
        <Button onClick={() => loginWithKakao()}>카카오 계정으로 시작!</Button>
      </Footer>
    </div>
  );
};

export default LoginPage;
