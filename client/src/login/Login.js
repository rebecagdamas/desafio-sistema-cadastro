import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

function Login() {
  const handleDadosLogin = (values) => {
    Axios.post("http://localhost:3080/login", {
      email: values.email,
      senha: values.senha,
    }).then((response) => {
      alert(response.data.msg);
    });
    <Link to="/cadastro-colaborador"></Link>;
  };

  const validacaoLogin = yup.object().shape({
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("O e-mail é obrigatório."),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres.")
      .max(10)
      .required("A senha é obrigatória."),
  });

  return (
    <div className="Login">
      <h4>Login</h4>
      <Formik
        initialValues={{}}
        validationSchema={validacaoLogin}
        values={
          (document.getElementById.email.value,
          document.getElementById.senha.value)
        }
      >
        <Form className="login-form" onSubmit={handleDadosLogin()}>
          <div className="form-group">
            <label>E-mail: </label>
            <Field name="email" className="form-field" maxLength="50" />

            <ErrorMessage
              component="span"
              name="email"
              id="email"
              className="form-error"
            ></ErrorMessage>
          </div>
          <div className="form-group">
            <label>Senha: </label>
            <Field
              type="password"
              name="senha"
              id="senha"
              className="form-field"
            />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <div className="botoes">
            <button Link to="/cadastro-login">
              Cadastre-se
            </button>
            <button className="button" type="submit">
              Logar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
