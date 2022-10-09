import NavBar from "../../components/NavBar";
import { FaHatCowboy } from "react-icons/fa";
import { Container } from "./style.js";

function NotFound() {
  return (
    <>
      <NavBar />
      <Container>
        <div className="showContent">
          <p>
            Página não encontrada, <span>forasteiro</span>!
          </p>
          <FaHatCowboy />
        </div>
      </Container>
    </>
  );
}

export default NotFound;
