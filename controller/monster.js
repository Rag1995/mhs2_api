const Monster = require("../services/monster");
const Permission = require("../services/permission");

exports.findAll = (req, res) => {
  Monster.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};

exports.find = (req, res) => {
  Monster.find(req.query)
    .then((data) => {
      res.json({
        perPage: req.query.perPage,
        ...data,
      });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};

exports.findByNo = (req, res) => {
  Monster.findByNo(req.params.No)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ error: "Not Found." });
      }
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};

exports.findAllWithPerm = (req, res) => {
  Permission.mapWithPerm(req.user.perm_table, Monster.findAll())
    .then((data) => {
      res.json(data);
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};
