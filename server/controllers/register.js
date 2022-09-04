const bcrypt = require("bcrypt");
const User = require("../models/user.schema");

const register = async (req, res) => {
  const { name, password } = req.body;

  User.findOne({ name }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "Ya existe un usuario con ese nombre" });
    } else if (!name || !password) {
      return res.json({ mensaje: "Falta el nombre / contraseña" });
    } else {
      bcrypt.hash(password, 10, (error, passwordHasheada) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new User({
            name,
            password: passwordHasheada,
          });

          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "Usuario creado correctamente", usuario });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;