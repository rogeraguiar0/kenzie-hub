import logo from "../../assets/logo.svg";
import { Container } from "./style.js";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Container>
      <div className="showNav">
        <img src={logo} alt="" />
        <Link className="btn-dk" to={"/"}>
          Voltar
        </Link>
      </div>
    </Container>
  );
}

export default NavBar;
