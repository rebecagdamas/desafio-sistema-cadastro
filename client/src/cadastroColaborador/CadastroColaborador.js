import React, { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

function CadastroColaborador() {
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
      <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field
              name="confirmation"
              className="form-field"
              placeholder="Senha"
            />

            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CadastroColaborador;
