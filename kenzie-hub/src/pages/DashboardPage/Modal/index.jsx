import { ModalBg, ModalCard, Header, Formulary } from "./style.js";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { api } from "../../../services/api.js";
import { UserContext } from "../../../contexts/UserContext.jsx";
import { VscLoading } from "react-icons/vsc";

function Modal({ setShowModal }) {
  const { success, fail, technologies, setTechnologies } =
    useContext(UserContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório").min(2),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleForm = async (data) => {
    setIsLoading(true);
    try {
      const userToken = localStorage.getItem("@kenzie_hub_token");
      await api.post("users/techs", data, {
        headers: {
          Authorization: `token ${userToken}`,
        },
      });
      success("Tecnologia adicionada com sucesso!");
    } catch (err) {
      console.error(err);
      fail("Não foi possível concluir a ação");
    } finally {
      setIsLoading(false);
      setShowModal(false);
      setTechnologies(technologies);
      reset();
    }
  };

  const handleClose = () => {
    document.querySelector(".showCard").classList.add("closeCard");
    setTimeout(() => {
      setShowModal(false);
    }, 350);
  };

  return (
    <ModalBg>
      <ModalCard className="showCard">
        <Header>
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => handleClose()}>
            <AiOutlineClose />
          </button>
        </Header>
        <Formulary onSubmit={handleSubmit(handleForm)}>
          <label htmlFor="title">Nome</label>
          <input
            className="input-df"
            placeholder="Nome da tecnologia..."
            type="text"
            {...register("title")}
          />
          {errors.title?.message && <span>{errors.title?.message}</span>}
          <label htmlFor="status">Selecione status</label>
          <select className="input-df" {...register("status")}>
            <option value="">Status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status?.message && <span>{errors.status?.message}</span>}
          {isLoading ? (
            <button className="btn-df-ac" type="submit" disabled>
              <VscLoading className="loading" />
              <p>Cadastrando...</p>
            </button>
          ) : (
            <button className="btn-df" type="submit">
              Cadastrar Tecnologia
            </button>
          )}
        </Formulary>
      </ModalCard>
    </ModalBg>
  );
}

export default Modal;
