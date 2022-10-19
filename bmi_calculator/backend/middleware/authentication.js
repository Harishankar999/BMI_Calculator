const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.headers.authentication;
  if (!token) {
    return res.send("Please Login Again");
  }
  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    if (err) {
      return res.send(
        "You have Entered Wrong Token Please Enter correct Token"
      );
    }
    // console.log(decoded.user_id);
    req.body.email = decoded.email;
    req.body.userId = decoded.user_id;
    next();
  });
};

module.exports = authentication;
