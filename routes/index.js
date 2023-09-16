const express = require("express");
const router = express.Router();
const myControllers = require("../controllers");

router.get("/", myControllers.tommyFunction);
router.get("/nina", myControllers.ninaFunction);
router.get("/rosa", myControllers.rosaFunction);

module.exports = router;