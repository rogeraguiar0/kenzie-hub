import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState(false);

  const success = (message) => {
    toast.success(message);
  };
  const fail = (message) => {
    toast.error(message);
  };

  return (
    <UserContext.Provider value={{ success, fail, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
