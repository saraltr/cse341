const routes = require("express").Router();

routes.get("/", (req, res, next) => {
    res.json("Hello Tommy!");    
});

module.exports = routes;