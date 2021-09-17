import React from "react";
import Axios from "axios";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

function CadastroColaborador() {
  const handleRegister = (values) => {
    Axios.post("http://localhost:3080/colaboradores", {
      nome: values.nome,
      email: values.email,
      telefone: values.telefone,
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
    telefone: yup.number().required(11, "O telefone é obrigatório."),
  });
  return (
    <div>
      <h4>Cadastro</h4>
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="form-group">
            <labe>Nome:</labe>
            <Field name="password" className="form-field" />

            <ErrorMessage component="span" name="nome" className="form-error" />
          </div>

          <div className="register-form-group">
            <label>E-mail:</label>
            <Field name="email" className="form-field" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <label>Telefone</label>
            <Field name="telefone" className="form-field" />

            <ErrorMessage
              component="span"
              name="telefone"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Cadastrar Colaborador
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CadastroColaborador;
