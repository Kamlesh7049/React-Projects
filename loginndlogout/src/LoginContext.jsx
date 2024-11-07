import { createContext, useState } from "react";

const myloginContext = createContext();

const LoginContext = ({ children }) => {
  const [user, setUser] = useState({ name: "", auth: false });

  const login = (nm) => {
    setUser({ name: nm, auth: true });
  };

  const logout = () => {
    setUser({ name: "", auth: false }); // Reset name to an empty string
  };

  return (
    <myloginContext.Provider value={{ user, login, logout }}>
      {children}
    </myloginContext.Provider>
  );
};

export default LoginContext;
export { myloginContext };
