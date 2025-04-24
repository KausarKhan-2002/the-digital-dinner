const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createTokenSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SIGN, {
    expiresIn: "30d",
  });

  // console.log("COOKIE_HTTPONLY:",process.env.COOKIE_HTTPONLY );
  // console.log("COOKIE_SECURE:",process.env.COOKIE_SECURE);
  // console.log("COOKIE_SAMESITE:",process.env.COOKIE_SAMESITE);

  const isProd = process.env.NODE_ENV === "production";

  res.cookie("jwt_token", token, {
    httpOnly: process.env.COOKIE_HTTPONLY === "true", // JS can’t access the cookie
    secure: isProd && process.env.COOKIE_SECURE === "true", // it should be true in production to http
    sameSite:
      process.env.COOKIE_SAMESITE === "Lax"
        ? "Lax"
        : process.env.COOKIE_SAMESITE === "Strict"
        ? "Strict"
        : "Lax",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  });
};
