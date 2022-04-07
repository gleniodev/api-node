const { Usuario } = require('../models')
const bcrypt = require('bcrypt')

const controller = {
  //LISTAR TODOS OS USUÁRIOS
  index: async (req, res) => {
    const usuarios = await Usuario.findAll()
    res.status(200).json(usuarios)
  },
  //LISTAR USUÁRIOS POR ID
  show: async (req, res) => {
    const { id } = req.params
    const usuarioId = await Usuario.findByPk(id)
    if (usuarioId) {
      res.status(200).json(usuarioId)
    } else {
      res.status(404).send({ message: 'Usuário não encontrado!' })
    }
  },
  //CADASTRAR USUÁRIOS
  add: async (req, res) => {
    const { nome, email, senha } = req.body
    const senhaCrypto = await bcrypt.hash(senha, 12)
    const validarEmail = await Usuario.findOne({ where: { email } })
    console.log(validarEmail)
    if (validarEmail) {
      res.status(400).json({ message: 'E-mail já cadastrado!' })
    } else {
      const novoUsuario = await Usuario.create({
        nome,
        email,
        senha: senhaCrypto,
      })
      if (novoUsuario) {
        res.status(200).json(novoUsuario)
      } else {
        res.status(400).json({ message: 'Usuário não cadastrado!' })
      }
    }
  },
}

module.exports = controller
