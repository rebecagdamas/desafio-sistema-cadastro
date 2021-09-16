import React, { useState } from "react";
import Axios from "axios";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

function CadastroLogin() {
  /*
  const [dadosLogin, setDadosLogin] = useState({
    nomeLogin: "",
    emailLogin: "",
    senhaLogin: "",
    confirmarSenha: "",
  });

  function handleInputChange(e) {
    dadosLogin[e.target.name] = e.target.value;
    setDadosLogin(dadosLogin);
  }

  // Função para comprar Senha e Confirmação
  function confirmacaoSenha() {
    const senha = dadosLogin.senhaLogin;
    const confSenha = dadosLogin.confirmarSenha;
    if (senha !== confSenha) {
      alert("As senhas são diferentes");
    }
  }

  function validarNome() {
    const campoNome = dadosLogin.nomeLogin.length;
    console.log(campoNome);
  }

  function handleSubmit(e) {
    e.preventDefault();
    confirmacaoSenha(dadosLogin);

    Axios.post("http://localhost:3080/registrar-usuario", {
      nomeLogin: dadosLogin.nomeLogin,
      emailLogin: dadosLogin.emailLogin,
      senhaLogin: dadosLogin.senhaLogin,
    }).then((response) => {
      console.log(response);
    });
  }*/

  const handleRegister = (values) => {
    Axios.post("http://localhost:3080/integrantes", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };

  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("O email é obrigatório."),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres.")
      .required("A senha é obrigatória."),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes.")
      .required("A confirmação da senha é obrigatória."),
  });

  return (
    <div>
      <h1>Cadastre-se no nosso Sistema</h1>

      <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <label>Nome Completo: </label>
        <Field
          type="text"
          name="nomeLogin"
          id="nomeLogin"
          maxLength="50"
          required
        ></Field>

        <div className="register-form-group">
          <label>Nome:</label>
          <Field name="email" className="form-field" />

          <ErrorMessage component="span" name="email" className="form-error" />
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <Field name="password" className="form-field" />

          <ErrorMessage
            component="span"
            name="password"
            className="form-error"
          />
        </div>

        <div className="form-group">
          <label>Confirmação Senha:</label>
          <Field name="confirmation" className="form-field" />

          <ErrorMessage
            component="span"
            name="confirmation"
            className="form-error"
          />
        </div>
      </Formik>
    </div>
  );
}
export default CadastroLogin;
