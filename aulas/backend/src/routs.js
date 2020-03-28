const express = require("express");
const routes = express.Router();
const crypto = require("crypto");
const incidentcontroller = require("./controllers/incidentcontroller");
//const connection = require("./database/connection");
const Ongcontroller = require("./controllers/Ongscontroller");
const profilecontroller = require("./controllers/profilecontroller");
const sessioncontroller = require("./controllers/sessioncontroller");

routes.get("/ongs", Ongcontroller.index);

routes.post("/sessions", sessioncontroller.create);

routes.post('/ongs', Ongcontroller.create/*async (request, response*/);

routes.post("/incidents", incidentcontroller.create);

routes.get("/incidents", incidentcontroller.index);

routes.delete("/incidents/:id", incidentcontroller.delete);

routes.get("/profile", profilecontroller.index);

module.exports = routes;