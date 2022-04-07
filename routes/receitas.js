const express = require("express")
const router = express.Router()
const receitasController = require("../controllers/receitas");

//LISTAR RECEITAS GERAL E POR ID
router.get("/", receitasController.index);
router.get("/buscar/:id", receitasController.show);

// //LISTAR RECEITAS POR CATEGORIA
router.get("/categorias/:id", receitasController.categorias);

// //LISTAR RECEITAS POR TÍTULO
router.get("/filtrar", receitasController.titulo);

// //LISTAR RECEITAS POR USUÁRIO
router.get("/filtrar/usuario", receitasController.usuario);

// //CADASTRAR RECEITAS
router.post("/cadastrar", receitasController.add);

// //EDITAR RECEITAS
router.put("/editar/:id", receitasController.edit);

// //DELETAR RECEITAS
router.delete("/excluir/:id", receitasController.delete);

module.exports = router;
