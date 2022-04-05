const Gene = require("../services/gene");

exports.create = (req, res) => {
  Gene.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};

exports.findAll = (req, res) => {
  Gene.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};

exports.find = (req, res) => {
  Gene.find(req.query)
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

exports.findByNoList = (req, res) => {
  const q = req.query.q
    .filter((v) => !(isNaN(v) || isNaN(parseInt(v))))
    .slice(0, 9);
  Gene.findByNoList(q)
    .then((data) => {
      res.json(data);
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message });
    });
};

exports.findByNo = (req, res) => {
  Gene.findByNo(req.params.No)
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

exports.update = (req, res) => {
  Gene.update(req.params.No, req.body)
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
  Gene.delete(req.params.No)
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
