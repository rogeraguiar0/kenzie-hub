import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { Container, AddTecnologies } from "./style";
import { BsPlusLg } from "react-icons/bs";
import TecnologiesContainer from "./TecnologiesContainer";
import Modal from "./Modal";
import { useState } from "react";

function DashboardPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavBar />
      <Header />
      <Container>
        <div className="showMessage">
          <AddTecnologies>
            <h3>Tecnologias</h3>
            <button className="btn-dk" onClick={() => setShowModal(true)}>
              <BsPlusLg />
            </button>
          </AddTecnologies>
          <TecnologiesContainer />
        </div>
      </Container>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
}

export default DashboardPage;
