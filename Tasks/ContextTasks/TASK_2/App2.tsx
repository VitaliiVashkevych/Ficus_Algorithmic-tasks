import React from "react";
import "./App.css";
import { AuthContextProvider } from "./AuthContext/AuthContext";
import { useAuthContext } from "./AuthContext/useAuthContext";

function App2() {
  return (
    <AuthContextProvider>
      <Title />
      <Greeter />
      <Button />
    </AuthContextProvider>
  );
}

function Button() {
  const { logIn } = useAuthContext();
  return <button onClick={logIn}>Log In / Log Out</button>;
}
function Title() {
  const { isLoggedIn } = useAuthContext();
  console.log(isLoggedIn);

  return <h1>Logged in: {isLoggedIn.toString()}</h1>;
}

function Greeter() {
  const { user, isLoggedIn } = useAuthContext();
  console.log(user);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Hello {user.name}</h1>
          <h1>Age: {user.age}</h1>
        </>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}
export default App2;
