require("dotenv").config({
  path: __dirname + `./.env.${process.env.NODE_ENV}`,
});

const config = {
  development: {
    use_env_variable: false,
    database: "MHS2",
    username: "adminMHS2",
    password: "adminMHS2pAs$w0rd",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
    pool: {
      max: 10,
      min: 1,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
    },
    timezone: "+08:00",
    logging: false,
  },
  test: {
    use_env_variable: false,
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: false,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      // ssl: {
      //   require: true,
      //   rejectUnauthorized: false,
      // },
    },
    pool: {
      max: 10,
      min: 1,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
    },
    timezone: "+08:00",
    logging: false,
  },
};

module.exports = config;
