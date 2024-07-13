import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
      console.log(userContext + 'userContext login');
      userContext.setUser({
        name: 'ps3neito',
        email: 'ps3neito@yahoo.co.jp'
      })
  }

  const handleLogout = () => {
      console.log(userContext + 'userContext logouts');
      userContext.setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User name is {userContext.user?.name}</p>
      <p>User email is {userContext.user?.email}</p>
    </div>
  )
}
