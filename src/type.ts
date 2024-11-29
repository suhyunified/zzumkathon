export interface User {
  id: number;
  username: string;
  email: string;
  mobileNo: string;
  freeTier: boolean;
  nickname: string;
}

export type Message = {
  id: number;
  content: string;
  nickname: string;
  itemType: number;
  userId: number;
};
