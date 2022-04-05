const User = require("../services/user");

exports.create = (req, res) => {
  User.findByUsername(req.body.username)
    .then((data) => {
      if (data) {
        throw new Error("Username duplicate.");
      }
      return User.create(req.body);
    })
    .then(() => {
      res.json({ message: "User created successfully." });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};

exports.delete = (req, res) => {
  User.delete(id)
    .then(() => {
      res.json({ message: "Deleted successfully." });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};
