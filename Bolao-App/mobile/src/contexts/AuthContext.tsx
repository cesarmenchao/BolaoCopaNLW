import { createContext } from "react";

interface UserProps {
  name: string;
  email: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {
    console.log("estamos logados");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
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
