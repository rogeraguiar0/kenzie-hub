import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface iChildren {
  children: ReactNode;
}

interface iTechnologies {
  id: string;
  title: string;
  status: string;
  user: {
    id: string;
  };
  create_at: string;
  updated_at: string;
}

interface iProviderValues {
  user: boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
  technologies: iTechnologies[] | null;
  setTechnologies: Dispatch<SetStateAction<iTechnologies[] | null>>;
  getUserInfo: Dispatch<SetStateAction<iTechnologies[] | null>>;
  success: (message: string) => void;
  fail: (message: string) => void;
}

export const UserContext = createContext({} as iProviderValues);

function UserProvider({ children }: iChildren) {
  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const [technologies, setTechnologies] = useState<iTechnologies[] | null>(
    null
  );

  const getUserInfo = async () => {
    try {
      const userToken = window.localStorage.getItem("@kenzie_hub_token");
      const response = await api.get("profile/", {
        headers: {
          Authorization: `token ${userToken}`,
        },
      });
      setTechnologies(response.data.techs);
    } catch (err) {
      console.error(err);
    }
  };

  const success = (message: string) => {
    toast.success(message);
  };
  const fail = (message: string) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        getUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
