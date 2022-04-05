const Role = require("../services/role");

exports.create = (req, res) => {
  Role.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};

exports.findAll = (req, res) => {
  Role.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};

exports.findById = (req, res) => {
  Role.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};

exports.update = (req, res) => {
  Role.update(req.params.id, req.body)
    .then((num) => {
      if (num == 1) {
        res.send("Updated successfully.");
      } else {
        res.status(400).json({ error: "Invalid update." });
      }
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};

exports.delete = (req, res) => {
  Role.delete(req.params.id)
    .then((num) => {
      if (num == 1) {
        res.send("Deleted successfully.");
      } else {
        res.status(400).json({ error: "Invalid delete." });
      }
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};
