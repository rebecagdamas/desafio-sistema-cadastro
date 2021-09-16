import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

function Login() {
  const handleDadosLogin = (dados) => {
    Axios.post("http://localhost:3080/login", {
      emailLogar: dados.emailLogar,
      senhaLogar: dados.senhaLogar,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const validacaoLogin = yup.object().shape({
    email: yup
      .string()
      .email("E-mail inválido")
      .required("O e-mail é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <div className="App">
      <h3>Tela de login</h3>
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleDadosLogin}
        validationSchema={validacaoLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <label>E-mail: </label>
            <Field name="email" className="form-field" maxLength="50" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            ></ErrorMessage>
          </div>

          <div className="form-group">
            <label>Senha: </label>
            <Field
              type="password"
              name="senhaLogar"
              className="form-field"
              maxLength="10"
            />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Entrar
          </button>
        </Form>
      </Formik>

      <div>
        <Link to="/cadastro-login">Cadastre-se</Link>
      </div>
    </div>
  );
}

export default Login;
