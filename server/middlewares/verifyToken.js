const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const tokenn = req.headers["token"];
    let token = null
  if (tokenn && tokenn.toLowerCase().startsWith('bearer')) {
    token =tokenn.substring(7)

    jwt.verify(token, process.env.JWTPRIVATEKEY, (error, data) => {
      if (error) return (res.status(400).json({ mensaje: "Token invalido", mensaje2:error}));
      else {
        req.user = data;
        next();
      }
    });
  } else {
    res.status(400).json({ mensaje: "Debes enviar un token" });
  }
};

module.exports = verifyToken;
