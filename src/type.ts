export interface User {
  id: number;
  username: string;
  email: string;
  mobilNo: string;
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
