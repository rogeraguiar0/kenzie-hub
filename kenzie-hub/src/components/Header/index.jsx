import { VscLoading } from "react-icons/vsc";
import { Container } from "./style.js";
import { api } from "../../services/api.js";
import { useEffect, useState } from "react";

function Header() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const userId = window.localStorage.getItem("@kenzie_hub_userid:");
        const response = await api.get(`users/${userId}`);
        setUserInfo({
          name: response.data.name,
          course_module: response.data.course_module,
        });
      } catch (err) {
        console.error(err);
      }
    };
    getUserInfo();
  }, []);

  return (
    <Container>
      <div className="showContent">
        {userInfo.name ? (
          <h2>Olá, {userInfo.name}!</h2>
        ) : (
          <h2>
            <VscLoading className="loading" />
          </h2>
        )}
        {userInfo.course_module ? (
          <p>{userInfo.course_module}</p>
        ) : (
          <p>
            <VscLoading className="loading" />
          </p>
        )}
      </div>
    </Container>
  );
}

export default Header;
