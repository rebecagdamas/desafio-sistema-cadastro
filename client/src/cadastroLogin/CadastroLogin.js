import React, { useState } from "react";
import Axios from "axios";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import "./CadastroLogin.css";
import Button from "react-bootstrap/Button";

function CadastroLogin() {
  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/usuarios-login", {
      nome: values.nome,
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };

  const validationsRegister = yup.object().shape({
    nome: yup
      .string()
      .max(50)
      .min(10, "Digite o seu nome completo.")
      .required("O nome é obrigatório."),
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("O email é obrigatório."),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres.")
      .max(12)
      .required("A senha é obrigatória."),
    confirmation: yup
      .string()
      .max(12)
      .oneOf([yup.ref("password"), null], "As senhas são diferentes.")
      .required("A confirmação da senha é obrigatória."),
  });

  return (
    <div className="page">
      <h4>Cadastro Login</h4>

      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="formulario">
          <div className="form-group">
            <label>Nome: </label>
            <Field type="text" name="nome" className="form-field" />

            <ErrorMessage component="span" name="nome" className="form-error" />
          </div>
          <div className="form-group">
            <label>E-mail: </label>
            <Field type="email" name="email" className="form-field" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <label>Senha: </label>
            <Field type="password" name="password" className="form-field" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <label>Confirmação Senha: </label>
            <Field type="password" name="confirmation" className="form-field" />

            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>
          <Button className="btn btn-dark btn-lg btn-block" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
export default CadastroLogin;
