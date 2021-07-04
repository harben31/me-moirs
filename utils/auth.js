const jwt = require('jsonwebtoken');

//Will verify token and retrieve user based on the token payload
module.exports = function (req, res, next) {
    console.log(req);
    const token = req.header('token');
    console.log('auth line 6', token);
    if (!token) {
        return res.status(401).json({ message: 'Auth Error'});
    };
    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded.user;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Invalid Token'});
    }
};