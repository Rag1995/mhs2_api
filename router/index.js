'use strict';

const fs = require('fs');
const router = require("express").Router();
const path = require('path');
const basename = path.basename(__filename);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const r = require(path.join(__dirname, file));
    router.use("", r);
  });

module.exports = router
