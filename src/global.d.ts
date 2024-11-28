export declare global {
  interface Window {
    Kakao: { Auth: { authorize: ({ redirectUri: string }) => void } };
  }
}
