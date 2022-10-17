import logo from "../../assets/logo.svg";
import { Container } from "./style.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function NavBar() {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = () => {
    window.localStorage.removeItem("@kenzie_hub_token");
    window.localStorage.removeItem("@kenzie_hub_userid");
    setUser(false);
    navigate("/");
  };

  return (
    <Container>
      <div className="showNav">
        <img src={logo} alt="" />
        <button onClick={handleClick} type="button" className="btn-dk">
          Voltar
        </button>
      </div>
    </Container>
  );
}

export default NavBar;
