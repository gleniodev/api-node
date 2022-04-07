const { Receita, Sequelize, Usuario, Categoria } = require('../models');
const op = Sequelize.Op;

const controller = {

    //LISTAR TODAS RECEITAS
    index: async (req, res) => {
        const receitas = await Receita.findAll({
            include: [{
                model: Usuario,
                as: "usuario",
                attributes: { exclude: ["senha"] }
            }, {
                model: Categoria,
                as: "categoria"
            }],
            attributes: { exclude: ["id_usuario", "UsuarioId", "id_categoria", "CategoriumId"] },
        })
        res.status(200).json(receitas)

    },
    //LISTAR RECEITAS POR ID
    show: async (req, res) => {
        const { id } = req.params;
        const receitaId = await Receita.findAll({
            where: { id },
            include: [{
                model: Usuario,
                as: "usuario",
                attributes: { exclude: ["senha"] }
            }, {
                model: Categoria,
                as: "categoria"
            }],
            attributes: { exclude: ["id_usuario", "UsuarioId", "id_categoria", "CategoriumId"] }
        })
        if (receitaId) {
            res.status(200).json(receitaId)
        } else {
            res.status(404).send({ message: "Receita não encontrada!" })
        }
    },
    //LISTAR RECEITAS POR ID DA CATEGORIA
    categorias: async (req, res) => {
        const { id } = req.params;
        const receitasPorCategoria = await Receita.findAll({
            where: { id_categoria: id },
            include: [{
                model: Usuario,
                as: "usuario",
                attributes: { exclude: ["senha"] }
            }, {
                model: Categoria,
                as: "categoria"
            }],
            attributes: { exclude: ["id_usuario", "UsuarioId", "id_categoria", "CategoriumId"] }
        })
        if (receitasPorCategoria) {
            res.status(200).json(receitasPorCategoria)
        } else {
            res.status(404).send({ message: "Categoria de receita não encontrada!" })
        }
    },
    //LISTAR TODAS AS RECEITAS DO USUARIO
    usuario: async (req, res) => {
        const usuarioLogado = req.cookies.usuario.id;
        console.log(usuarioLogado)
        const receitas = await Receita.findAll(
            {
                where: { id_usuario: usuarioLogado },
                include: [{
                    model: Usuario,
                    as: "usuario",
                    attributes: { exclude: ["senha"] }
                }, {
                    model: Categoria,
                    as: "categoria"
                }],
                attributes: { exclude: ["id_usuario", "UsuarioId", "id_categoria", "CategoriumId"] }
            });
        res.status(200).json(receitas)
    },
    //LISTAR RECEITAS POR TÍTULO (VERIFICAR IMPLEMENTAÇÃO)
    titulo: async (req, res) => {
        const { titulo } = req.query;
        const receitasPorTitulo = await Receita.findAll({
            where: { titulo: { [op.like]: `%${titulo}%` } },
            include: [{
                model: Usuario,
                as: "usuario",
                attributes: { exclude: ["senha"] }
            }, {
                model: Categoria,
                as: "categoria"
            }],
            attributes: { exclude: ["id_usuario", "UsuarioId", "id_categoria", "CategoriumId"] }
        })

        if (receitasPorTitulo) {
            res.status(200).json(receitasPorTitulo)
        }
    },
    //CADASTRAR RECEITAS
    add: async (req, res) => {
        const { titulo, tempo_preparo, rendimento, ingredientes, modo_preparo, observacoes, url_imagem, id_categoria, data, url_video } = req.body;
        const novaReceita = await Receita.create({
            titulo,
            tempo_preparo,
            rendimento,
            ingredientes,
            modo_preparo,
            observacoes,
            url_imagem,
            id_usuario: req.cookies.usuario.id,
            id_categoria,
            data,
            url_video
        })
        if (novaReceita) {
            res.status(200).json(novaReceita)
        } else {
            res.status(404).send({ message: "Receita não cadastrada!" })
        }
    },
    //EDITAR RECEITAS
    edit: async (req, res) => {
        const { id } = req.params;
        const { titulo, tempo_preparo, rendimento, ingredientes, modo_preparo, observacoes, url_imagem, id_categoria, data, url_video } = req.body;
        const buscarReceita = await Receita.findByPk(id);
        if (buscarReceita) {
            if (buscarReceita.id_usuario === req.cookies.usuario.id) {
                const receitaEditada = await Receita.update({
                    titulo,
                    tempo_preparo,
                    rendimento,
                    ingredientes,
                    modo_preparo,
                    observacoes,
                    url_imagem,
                    id_usuario: req.cookies.usuario.id,
                    id_categoria,
                    data,
                    url_video
                }, { where: { id } })
                if (receitaEditada) {
                    res.status(204)(await Receita.findByPk(id))
                } else {
                    res.status(404).send({ message: "Receita não atualizada!" })
                }
            } else {
                res.status(404).send({ message: "Este usuário não tem permissão para editar esta receita!" })
            }
        } else {
            res.status(404).send({ message: "Receita não encontrada!" })
        }


    },
    //EXCLUIR RECEITAS
    delete: async (req, res) => {
        const { id } = req.params;
        const receitaExcluida = await Receita.findByPk(id);
        if (receitaExcluida) {
            await Receita.destroy({ where: { id } })
            res.status(200).send({ message: "Receita excluída com sucesso!" })
        } else {
            res.status(404).send({ message: "Receita não encontrada!" })
        }
    }

}

module.exports = controller;