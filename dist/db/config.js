const config = {
  dev: {
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
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    database: "d183oj3kqpuosn",
    username: "torsxlguyuadne",
    password:
      "eb8fa6c8a153aae558a8bd9411281321babe82dc7fcb40b185c2505b4ea4d69d",
    host: "ec2-52-21-136-176.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
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
