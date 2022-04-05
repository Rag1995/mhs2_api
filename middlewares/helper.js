const passport = require("../config/passport");
const Permission = require("../services/permission");

exports.authenticate = (req, res) => {
  return new Promise((resolve, reject) => {
    passport.authenticate("jwt", { session: false }, (err, user) => {
      console.log(req.method, req.route.path, user);
      if (err) reject(new Error(err));
      else if (!user) reject(new Error("Not authenticated"));
      req.user = user;
      resolve(user);
    })(req, res);
  });
};

exports.checkPermission = (req, res, next) => {
  this.authenticate(req, res)
    .then(({ role_id }) => {
      return Permission.checkPermission(role_id, req.route.path, req.method);
    })
    .then((result) => {
      if (result) {
        req.user.perm_table = result.perm_table;
        next();
      } else {
        throw new Error("Forbidden");
      }
    })
    .catch(({ message }) => {
      res.status(401).json({ error: message });
    });
};
