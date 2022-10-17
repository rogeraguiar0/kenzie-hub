import logo from "../../assets/logo.svg";
import { VscLoading } from "react-icons/vsc";
import { Container, Nav, Card, Form } from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { api } from "../../services/api.js";
import { UserContext } from "../../contexts/UserContext";

function RegisterPage() {
  const { success, fail, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/(\W)|_/, "Deve conter ao menos um caractér especial")
      .trim()
      .matches(/.{8,}/, "Deve ter no mínimo 8 dígitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    name: yup.string().required("Campo obrigatório").min(2),
    bio: yup.string().required("Campo obrigatório").min(3),
    contact: yup.string().required("Campo obrigatório").min(9),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleForm = async (data) => {
    setIsLoading(true);
    try {
      await api.post("users", data);
      setUser(true);
      success("Registro realizado com sucesso!");
    } catch (err) {
      console.error(err);
      fail("Falha no registro");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container>
        <div>
          <Nav className="showLogo2">
            <img src={logo} alt="" />
            <Link className="btn-dk" to={"/"}>
              Voltar
            </Link>
          </Nav>
          <Card className="showCard">
            <h2>Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa</p>
            <Form onSubmit={handleSubmit(handleForm)}>
              <label htmlFor="">Nome</label>
              <input
                {...register("name")}
                placeholder="Digite seu nome aqui..."
                className="input-df"
                type="text"
              />
              <span>{errors.name?.message}</span>
              <label htmlFor="">Email</label>
              <input
                {...register("email")}
                placeholder="Digite seu email aqui..."
                className="input-df"
                type="email"
              />
              <span>{errors.email?.message}</span>
              <label htmlFor="">Senha</label>
              <input
                {...register("password")}
                placeholder="Digite sua senha aqui..."
                className="input-df"
                type="password"
              />
              <span>{errors.password?.message}</span>
              <label htmlFor="">Confirmar senha</label>
              <input
                {...register("passwordConfirm")}
                placeholder="Confirme sua senha..."
                className="input-df"
                type="password"
              />
              <span>{errors.passwordConfirm?.message}</span>
              <label htmlFor="">Bio</label>
              <input
                {...register("bio")}
                placeholder="Digite sua bio aqui..."
                className="input-df"
                type="text"
              />
              <span>{errors.bio?.message}</span>
              <label htmlFor="">Contato</label>
              <input
                {...register("contact")}
                placeholder="Digite seu contato aqui..."
                className="input-df"
                type="text"
              />
              <span>{errors.contact?.message}</span>
              <label htmlFor="">Selecionar o módulo</label>
              <select {...register("course_module")} className="input-df">
                <option value="">Selecionar...</option>
                <option value="1° módulo">1° módulo</option>
                <option value="2° módulo">2° módulo</option>
                <option value="3° módulo">3° módulo</option>
                <option value="4° módulo">4° módulo</option>
                <option value="5° módulo">5° módulo</option>
                <option value="6° módulo">6° módulo</option>
              </select>
              <span>{errors.course_module?.message}</span>
              {isLoading ? (
                <button className="btn-df-ac" type="submit" disabled>
                  <VscLoading className="loading" />
                  <p>Cadastrando...</p>
                </button>
              ) : (
                <button className="btn-df" type="submit">
                  Cadastrar
                </button>
              )}
            </Form>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default RegisterPage;
