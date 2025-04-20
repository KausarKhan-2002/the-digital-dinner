const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createTokenSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SIGN, {
    expiresIn: "30d",
  });

  res.cookie("jwt_token", token, {
    httpOnly: true,
    secure: true, // it should be true in production to http
    sameSite: "None", // it should not for cross origin cookie
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  });
};
