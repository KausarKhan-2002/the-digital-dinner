const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createTokenSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SIGN, {
    expiresIn: "30d",
  });

  res.cookie("jwt_token", token, {
    httpOnly: process.env.COOKIE_HTTPONLY === "true", // JS can’t access the cookie
    secure: process.env.COOKIE_SECURE === "true", // it should be true in production to http
    sameSite: process.env.COOKIE_SAMESITE || "lax", // it should not for cross origin cookie
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  });
};
