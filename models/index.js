require("dotenv").config();

const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
console.log(env);
const config = require("../config/db.config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  console.log(config.use_env_variable, process.env[config.use_env_variable]);
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const gene = require("./gene")(sequelize, Sequelize.DataTypes);
const monster = require("./monster")(sequelize, Sequelize.DataTypes);
const monsterToGene = require("./monstertogene")(
  sequelize,
  Sequelize.DataTypes
);
const permission = require("./permission")(sequelize, Sequelize.DataTypes);
const role = require("./role")(sequelize, Sequelize.DataTypes);
const roleToPermission = require("./roletopermission")(
  sequelize,
  Sequelize.DataTypes
);
const user = require("./user")(sequelize, Sequelize.DataTypes);

const models = [
  gene,
  monster,
  monsterToGene,
  permission,
  role,
  roleToPermission,
  user,
];
models.forEach((model) => {
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
