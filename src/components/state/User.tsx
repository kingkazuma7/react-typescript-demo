import { useState } from "react";

type AuthUser = {
  name: string,
  email: string,
}

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser); // 型アサーション
  const handleLogin = () => {
    setUser({ // nullを型推論する
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
    console.log("in");
  }
  const handleLogout = () => {
    setUser({} as AuthUser);
    console.log("out");
  }

  return (
    <div>
      <button onClick={handleLogin}>ログイン</button>
      <button onClick={handleLogout}>ログアウト</button>
      <div>ユーザー名は{user?.name}</div>
      <div>ユーザーメールは{user?.email}</div>
    </div>
  )
}
