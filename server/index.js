const express = require("express");
const app = express();
const nedb = require("nedb");
const dbLogin = new nedb({
  filename: "usuariosCadastrados.db",
  autoload: true,
});
const cors = require("cors");

app.use(cors());
app.use(express.json());

//Fazer Login
app.post("/login", (req, res) => {
  const usuario = {
    emailLogar: req.body.emailLogar,
    senhaLogar: req.body.senhaLogar,
  };

  dbLogin.insert(usuario, function (err) {
    if (err) return console.log(err); //caso ocorrer algum erro
    console.log("Novo usuário adicionado!");
  });
});

// Registrar para Login
app.post("/registrar-usuario", (req, res) => {
  const usuario = {
    nomeLogin: req.body.nomeLogin,
    emailLogin: req.body.emailLogin,
    senhaLogin: req.body.senhaLogin,
  };

  dbLogin.insert(usuario, function (err) {
    if (err) return console.log(err); //caso ocorrer algum erro
    console.log("Novo usuário adicionado!");
    const dadosSalvos = true;
  });
});

// Adicionar Integrantes
app.post("/registrar-usuario", (req, res) => {
  const usuario = {
    nomeLogin: req.body.nomeLogin,
    emailLogin: req.body.emailLogin,
    senhaLogin: req.body.senhaLogin,
  };

  dbLogin.insert(usuario, function (err) {
    if (err) return console.log(err); //caso ocorrer algum erro
    console.log("Novo usuário adicionado!");
    const dadosSalvos = true;
  });
});

app.listen(3080, () => {
  console.log("Rodando servidor porta 3080");
});
