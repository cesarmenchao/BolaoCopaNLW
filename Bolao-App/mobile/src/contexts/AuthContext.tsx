import { createContext } from "react";

interface UserProps {
  name: string;
  email: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  sigIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {}

  return (
    <AuthContext.Provider
      value={{
        user: {
          name: "Cesar",
          email: "Cesar@cesar.com",
          avatarUrl: "https://github.com/cesarmenchao.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
