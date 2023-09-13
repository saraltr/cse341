const routes = require("express").Router();

routes.get("/", (req, res, next) => {
    res.json("Hello World, This is port 3000");    
});

module.exports = routes;