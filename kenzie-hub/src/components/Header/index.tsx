import { VscLoading } from "react-icons/vsc";
import { Container } from "./style";
import { api } from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

interface iUserInfo {
  name: string;
  course_module: string;
}

function Header() {
  const { setTechnologies } = useContext(UserContext);

  const [userInfo, setUserInfo] = useState<iUserInfo | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const userToken = window.localStorage.getItem("@kenzie_hub_token");
        const response = await api.get("profile/", {
          headers: {
            Authorization: `token ${userToken}`,
          },
        });
        setUserInfo({
          name: response.data.name,
          course_module: response.data.course_module,
        });
        setTechnologies(response.data.techs);
      } catch (err) {
        console.error(err);
      }
    };
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="showContent">
        {userInfo?.name ? (
          <h2>Olá, {userInfo.name}!</h2>
        ) : (
          <h2>
            <VscLoading className="loading" />
          </h2>
        )}
        {userInfo?.course_module ? (
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
