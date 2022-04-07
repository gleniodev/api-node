const { Usuario } = require('../models')
const bcrypt = require('bcrypt')

const controller = {
  //LOGIN USUÁRIO
  auth: async (req, res) => {
    const { email, senha, manterLogado } = req.body
    const usuarioSalvo = await Usuario.findOne({ where: { email } })
    if (usuarioSalvo) {
      if (await bcrypt.compare(senha, usuarioSalvo.senha)) {
        //SALVANDO USUARIO NA SESSION
        req.session.usuario = usuarioSalvo;
        res.cookie("usuario", usuarioSalvo)
        res.status(200).json(usuarioSalvo)
        //MANTER USUARIO LOGADO
        if (manterLogado != undefined) {
          res.cookie("manterUsuarioLogado", usuarioSalvo.email, { maxAge: 3600000 })
        }
      } else {
        res.status(400).json({ message: 'Dados de login inválidos!' })
      }
    } else {
      res.status(400).json({ message: 'E-mail não cadastrado!' })
    }
  },
  logout: (req, res) => {
    req.session.usuario = null
    res.status(200).redirect("/acesso/login")
  }
}

module.exports = controller
