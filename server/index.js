const express = require("express");
const app = express();
const nedb = require("nedb");
const dbLogin = new nedb({
  filename: "usuariosLogin.db",
  autoload: true,
});
const dbColaboradores = new nedb({
  filename: "colaboradores.db",
  autoload: true,
});
const cors = require("cors");

app.use(cors());
app.use(express.json());

//Fazer Login
app.post("/login", (req, res) => {
  const login = {
    emailLogar: req.body.emailLogar,
    senhaLogar: req.body.senhaLogar,
  };

  console.log(emailLogar);
  console.log(senhaLogar);

  dbLogin.find(
    { emailLogar: "emailLogar" } && { senhaLogar: "senhaLogar" },
    function (err, docs) {
      console.log("Senha e e-mail iguais");
    }
  );
});

// Cadastrar Usuário Login
app.post("/usuarios-login", (req, res) => {
  const usuariosLogin = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
  };

  dbLogin.insert(usuariosLogin, function (err) {
    if (err) return console.log(err); //caso ocorrer algum erro
    console.log("Novo usuário adicionado!");
  });
});

// Adicionar Colaboradores
app.post("/colaboradores", (req, res) => {
  const colaborador = {
    nome: req.body.nome,
    email: req.body.email,
    telfone: req.body.telefone,
  };

  dbColaboradores.insert(colaborador, function (err) {
    if (err) return console.log(err); //caso ocorrer algum erro
    console.log("Novo colaborador adicionado!");
  });
});

app.listen(3080, () => {
  console.log("Rodando servidor porta 3080");
});
