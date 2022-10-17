import { createContext, useState, useEffect } from "react";
import { api } from "../services/api.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const [technologies, setTechnologies] = useState([]);

  const success = (message) => {
    toast.success(message);
  };
  const fail = (message) => {
    toast.error(message);
  };

  useEffect(() => {
    const id = localStorage.getItem("@kenzie_hub_userid");
    const verification = async () => {
      try {
        const response = await api.get(`users/${id}`);
        response.status && setUser(true);
        navigate("/dashboard");
      } catch {
        setUser(false);
      }
    };
    verification();
  }, []);

  return (
    <UserContext.Provider
      value={{
        success,
        fail,
        user,
        setUser,
        technologies,
        setTechnologies,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;