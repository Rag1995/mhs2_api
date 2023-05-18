require("dotenv").config();

const express = require("express");
const app = express();

/*
  parse requests of:
  content-type - application/json
  content-type - application/x-www-form-urlencoded
*/
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
  CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
*/
const cors = require("cors");
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};
app.use(cors(corsOptions));

/*
  If don’t want to use Helmet, then at least disable the X-Powered-By header.Attackers can use this header (which is enabled by default) to detect apps running Express and then launch specifically-targeted attacks.
*/
const helmet = require("helmet");
app.use(helmet()); // app.disable("x-powered-by");

/*
  creating a connection to the database.
*/
const { sequelize } = require("./models/index");

/*
  router
*/
app.use("/public", express.static("public"));
// app.use("/api", require("./router/index"));

app.get("/test", (req, res) => {
  res.send("hello world");
});

app.all("*", (req, res) => {
  res.send("Not Found");
});

/*
  starting Express.js Sever
*/
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  sequelize
    .authenticate()
    .then(() => console.log("connect to the database SUCCESS!!!"))
    .catch((err) => console.error("Unable to connect to the database:", err));
});


// Export the Express API
module.exports = app;
