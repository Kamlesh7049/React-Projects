import { useContext } from "react";
import { myloginContext } from "./LoginContext";
import UnAuthApp from "./UnAuthApp";
import AuthApp from "./AuthApp";

const App = () => {
  const { user } = useContext(myloginContext);

  return (
    <>
      <h1>Welcome to Login System!</h1>
      {user.auth ? <UnAuthApp /> : <AuthApp />}
    </>
  );
};

export default App;
