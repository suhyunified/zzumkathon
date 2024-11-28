import { createContext, useState } from "react";
import { User } from "../type";

export const UserContext = createContext<{
  user?: User;
  setUser?: React.Dispatch<React.SetStateAction<User>>;
}>({});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  console.log(localStorage.getItem("user"));
  const [user, setUser] = useState<User>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
