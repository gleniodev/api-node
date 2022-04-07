const express = require("express")
const router = express.Router()
const userController = require("../controllers/usuarios");

//LISTAR TODOS OS USUÁRIOS
router.get("/", userController.index);

//LISTAR USUÁRIOS POR ID
router.get("/buscar/:id", userController.show);

//CADASTRAR USUÁRIOS
router.post("/cadastrar", userController.add);

module.exports = router;
