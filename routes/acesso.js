const express = require("express");
const router = express.Router();
const acessoController = require("../controllers/acesso");

//ROTAS DE LOGIN
router.post("/login", acessoController.auth);

//ROTAS DE LOGIN
router.post("/logout", acessoController.logout);

module.exports = router;

