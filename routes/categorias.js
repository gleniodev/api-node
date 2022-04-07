const express = require("express");
const router = express.Router();
const categoriasController = require('../controllers/categorias')

//LISTAR TODAS AS CATEGORIAS
router.get("/", categoriasController.index);

// //LISTAR CATEGORIA POR ID
router.get("/buscar/:id", categoriasController.show);

module.exports = router;
