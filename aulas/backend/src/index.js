const express = require('express');
const app = express();
const routes = require("./routs");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(routes);
// rota /recurso

//Métodos HTTP:

//GET: Buscar/Listar uma informação do Back-end
//POST: Criar uma informação no back-end
//PUT: Alterar uma informação do Back-end
//DELETE: Deletar uma informação do Back-end

//Tipos de Parâmetros
//
// Query Params: Parâmetros nomeados enviados na rota  após "?" (Paginação, filtros)
// Route Params: Parâmetros utilizados para identificar recursos 
// Request Body: Corpo da requisição utilizado para criar ou alterar recursos

//


app.listen(3333);   