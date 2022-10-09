import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { Container } from "./style.js";

function DashboardPage() {
  return (
    <>
      <NavBar />
      <Header />
      <Container>
        <div className="showMessage">
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </Container>
    </>
  );
}

export default DashboardPage;
