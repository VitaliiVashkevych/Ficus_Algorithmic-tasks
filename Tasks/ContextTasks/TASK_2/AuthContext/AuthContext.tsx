import React, { createContext, useState } from "react";

export type AuthContextType = {
  user: {
    name: string;
    age: number;
  };
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  logIn: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: {
    name: "",
    age: 0,
  },
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  logIn: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "", age: 0 });

  const logIn = () => {
    setUser({ name: "John", age: 30 });
    setIsLoggedIn(!isLoggedIn);
  };

  const authValue = { user, isLoggedIn, setIsLoggedIn, logIn };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
