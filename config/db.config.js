const config = {
  development: {
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
    url: "postgres://liccqnpkdmktsj:20c0dd6e919515e7053621c8b248cfcacd1798ee549ef11c22b91e3f8b809bfd@ec2-44-194-92-192.compute-1.amazonaws.com:5432/dap7vbp3tos02i",
    dialect: "postgres",
    protocol: "postgres",
    // dialectOptions: {
    //   ssl: true,
    // },
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
