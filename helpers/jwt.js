const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'MatiasSendra'

exports.createToken = function (usuario) {
    let payload = {
        sub: usuario._id,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        email: usuario.email,
        rol: usuario.rol,
        iat: moment().unix(),
        exp: moment().add(1, 'day').unix()
    }

    return jwt.encode(payload, secret);
}