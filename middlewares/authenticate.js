const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'MatiasSendra'



exports.decodeToken = function (req, res, next) {

    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'NoHeadersError' });
    }

    let token = req.headers.authorization;
    let segment = token.split('.');

    if (segment.length != 3) {
        return res.status(403).send({ message: 'InvalidToken' });
    } else {
        try {
            var payload = jwt.decode(token, secret);
            console.log(payload);
        } catch (error) {
            console.log(error);
            return res.status(403).send({ message: 'ErrorToken' });
        }
    }

    req.user = payload;
    next();
}