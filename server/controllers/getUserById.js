const User = require("../models/user.schema");

const getUserById = async (req, res) => {
  const { id } = req.user;


  if (id.length === 24) {
    User.findById(id).then((usuario) => {
      if (!usuario) {
        return res.json({
          mensaje: "No se encontro ningun usuario con esa ID",
        });
      } else {
        const { _id, password, __v, ...resto } = usuario._doc;
        res.json(resto);
      }
    });
  } else {
    res.json({ mensaje: "Estas enviando una contraseña incorrecta" });
  }
};

module.exports = getUserById;
