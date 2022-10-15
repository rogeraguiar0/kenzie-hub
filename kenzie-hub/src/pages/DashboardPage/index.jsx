import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { Container, AddTecnologies } from "./style.js";
import { BsPlusLg } from "react-icons/bs";
import TecnologiesContainer from "./TecnologiesContainer";

function DashboardPage() {
  return (
    <>
      <NavBar />
      <Header />
      <Container>
        <div className="showMessage">
          <AddTecnologies>
            <h3>Tecnologias</h3>
            <button>
              <BsPlusLg />
            </button>
          </AddTecnologies>
          <TecnologiesContainer />
        </div>
      </Container>
    </>
  );
}

export default DashboardPage;
