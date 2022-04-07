const { Categoria } = require('../models');


const controller = {
    //LISTAR TODAS AS CATEGORIAS
    index: async (req, res) => {
        const categorias = await Categoria.findAll();
        res.status(200).json(categorias)
    },
    //LISTAR CATEGORIAS POR ID
    show: async (req, res) => {
        const { id } = req.params;
        const categoriaId = await Categoria.findByPk(id)
        if (categoriaId) {
            res.status(200).send(categoriaId)
        } else {
            res.status(404).send({ message: "Categoria não encontrado!" })
        }
    },
}

module.exports = controller