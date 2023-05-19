require("dotenv").config();

const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../services/user");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: process.env.JWT_SECRET || "ThisIsMyVeryVerySecretJsonWebToken",
  usernameField: "username",
  passwordField: "password",
};
passport.use(
  "jwt",
  new JwtStrategy(opts, (jwt_payload, done) => {
    User.findByPk(jwt_payload.id)
      .then(({ id, role_id }) => {
        done(null, { id: id, role_id: role_id });
      })
      .catch((error) => done(error, false));
  })
);

module.exports = passport;
