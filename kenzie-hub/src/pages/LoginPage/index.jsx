import { BsEyeSlash, BsEye } from "react-icons/bs";
import { VscLoading } from "react-icons/vsc";
import logo from "../../assets/logo.svg";
import { Container, Card, Form, Extras } from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { api } from "../../services/api.js";

function LoginPage() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [type, setType] = useState("password");
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = async (data) => {
    setIsLoading(true);
    try {
      const response = await api.post("sessions", data);
      window.localStorage.removeItem("@kenzie_hub_token:");
      window.localStorage.setItem("@kenzie_hub_token:", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("Falha no login");
    } finally {
      setIsLoading(false);
    }
  };

  const changeInput = () => {
    const eye = document.querySelector("#eye");
    const eyeSlash = document.querySelector("#eyeSlash");

    type === "password" ? setType("text") : setType("password");

    eye.classList.toggle("hidden");
    eyeSlash.classList.toggle("hidden");
  };

  return (
    <Container>
      <img className="showLogo" src={logo} alt="" />
      <Card className="showCard">
        <h3>Login</h3>
        <Form onSubmit={handleSubmit(handleForm)}>
          <label htmlFor="email">Email</label>
          <input
            className="input-df"
            placeholder="Digite seu email aqui..."
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
          <label htmlFor="password">Senha</label>
          <div>
            <input
              className="input-df"
              placeholder="Digite sua senha aqui..."
              type={type}
              {...register("password")}
            />
            <button type="button" onClick={() => changeInput()}>
              <BsEyeSlash id="eyeSlash" className="hidden" />
              <BsEye id="eye" />
            </button>
          </div>
          <span>{errors.password?.message}</span>
          {isLoading ? (
            <button className="btn-df-ac" type="submit">
              <VscLoading className="loading" />
              <p>Logando...</p>
            </button>
          ) : (
            <button className="btn-df" type="submit">
              Logar
            </button>
          )}
        </Form>
        <Extras>
          <p>Ainda não possui uma conta?</p>
          <Link to={"/register"} className="btn-vr">
            Cadastre-se
          </Link>
        </Extras>
      </Card>
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={800}
        hideProgressBar={true}
      />
    </Container>
  );
}

export default LoginPage;
