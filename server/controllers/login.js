const bcrypt = require("bcrypt");
const User = require("../models/user.schema");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { name, password } = req.body;
  User.findOne({ name }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: "Usuario no encontrado" });
    }

    bcrypt.compare(password, usuario.password).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, name } = usuario;

        const data = {
          id,
          name,
        };

        const token = jwt.sign(data, process.env.JWTPRIVATEKEY, {
          expiresIn: 86400 /* 24hs */,
        });

        res.json({
          mensaje: "Usuario logeado correctamente",
          usuario: {
            id,
            name,
            token,
          },
        });
      } else {
        return res.json({ mensaje: "Contraseña incorrecta" });
      }
    });
  });
};

module.exports = login;