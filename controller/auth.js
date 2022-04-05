require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../services/user");
const helper = require("../middlewares/helper");

exports.auth = (req, res, next) => {
  helper
    .authenticate(req, res)
    .then((data) => {
      res.json(data);
    })
    .catch(({ message }) => {
      res.status(401).json({ error: message });
    });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  User.findByUsername(username)
    .then((data) => {
      if (!data) throw new Error("User not exist.");
      if (!data.validPassword(password)) throw new Error("Wrong password.");

      const payload = { id: data.id };
      const secret = process.env.JWT_SECRET;
      const opts = { expiresIn: 86400 * 30 };
      const token = jwt.sign(payload, secret, opts);

      res.json({
        success: true,
        token: "JWT " + token,
      });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};
