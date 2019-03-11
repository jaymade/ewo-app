const jwt = require("jsonwebtoken");

// check for token
// validate toeken

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "averylongsecretformakingjsonwebtoken");
    next();
  } catch (error) {
    res.status(401).json({
      message: "Auth Failed"

    });

  }
};
