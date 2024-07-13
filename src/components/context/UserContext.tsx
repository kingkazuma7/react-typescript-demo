import { useState, createContext } from "react";

export type AuthUser = {
  name: string
  email: string
}

// 名前とメールアドレスを表すオブジェクトを定義
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
// UserContextが提供する値の形状, childrenを受け取れる
type UserContextProviderProps = {
  children: React.ReactNode
}

// createContext関数で、UserContext作成、初期値は空のオブジェクト
export const UserContext = createContext({} as UserContextType) // userContextに対してnullチェックができる、よってifがいらない

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}