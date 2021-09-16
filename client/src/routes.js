import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./login/Login";
import CadastroLogin from "./cadastroLogin/CadastroLogin";
import CadastroColaborador from "./cadastroColaborador/CadastroColaborador"

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Login }  path="/" exact />
           <Route component = { CadastroLogin }  path="/cadastro-login" />
           <Route component = { CadastroColaborador } path="/cadastro-colaborador"></Route>
       </BrowserRouter>
   )
}

export default Routes;

