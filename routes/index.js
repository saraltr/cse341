const routes = require("express").Router();

const myController = require("../controllers");

routes.get("/", myController.tommyFunction);

module.exports = routes;