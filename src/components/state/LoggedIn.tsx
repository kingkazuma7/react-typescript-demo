import { useState } from 'react';

export const LoggedIn = () => {
  const [isLoggedIn, seIisLoggedIn] = useState(false) // 初期はfalse
  const handleLogin = () => {
    seIisLoggedIn(true);
  }
  const handleLogout = () => {
    seIisLoggedIn(false);
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* <div>ログインしてます / ログアウトです</div> */}
      <div>ユーザーは、{isLoggedIn ? 'ログイン中' : 'ログアウトです' }</div>
    </div>
  )
}
