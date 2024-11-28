export interface User {
  id: number;
  username: string;
  email: string;
  mobileNo: string;
  freeTier: boolean;
}

export type Message = {
  id: number;
  content: string;
  nickname: string;
  itemType: number;
};
