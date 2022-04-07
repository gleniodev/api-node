const { Usuario } = require('../models');

const cookieLogin = (req, res, next) => {
    if (req.cokkies.manterUsuarioLogado != undefined && req.session.usuario == null) {
        const email = req.cookies.manterLogado;
        const usuario = Usuario.findOne({ where: { email } })
        req.session.usuario = usuario;
    }
    next();
}

module.exports = cookieLogin