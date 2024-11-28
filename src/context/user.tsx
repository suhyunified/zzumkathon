import { createContext, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  mobileNo: string;
}
export const UserContext = createContext<{ user?: User }>({});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  console.log(localStorage.getItem("user"));
  const [user] = useState<User | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
