import { BsTrash } from "react-icons/bs";
import { GiTechnoHeart } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Container, Container2, Tech } from "./style.js";
import { api } from "../../../services/api";

function TecnologiesContainer() {
  const { success, fail, technologies, setTechnologies } =
    useContext(UserContext);

  const [userTechs, setUserTechs] = useState([]);

  const handleRemove = async (id) => {
    try {
      const userToken = localStorage.getItem("@kenzie_hub_token");
      await api.delete(`users/techs/${id}`, {
        headers: {
          Authorization: `token ${userToken}`,
        },
      });
      success("Tecnologia removida com sucesso!");
    } catch (err) {
      console.error(err);
      fail("Não foi possível remover a tecnologia");
    } finally {
      setTechnologies(technologies);
    }
  };

  useEffect(() => {
    setUserTechs(technologies);
  }, [technologies]);

  return (
    <Container>
      {userTechs.length ? (
        <Container2>
          {userTechs.map((elem, index) => (
            <Tech key={index}>
              <h4>{elem.title}</h4>
              <div>
                <p>{elem.status}</p>
                <button onClick={() => handleRemove(elem.id)}>
                  <BsTrash />
                </button>
              </div>
            </Tech>
          ))}
        </Container2>
      ) : (
        <div>
          <p>
            Você ainda não adicionou nenhuma <span>tecnologia!</span>
          </p>
          <GiTechnoHeart />
        </div>
      )}
    </Container>
  );
}

export default TecnologiesContainer;
