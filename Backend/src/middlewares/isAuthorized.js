const { catchError } = require("../helper/catchError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthorized = async (req, res, next) => {
  try {
    // 1. Get token from cookies
    const { jwt_token } = req.cookies;
    console.log("jwt_token:",jwt_token);
    

    if (!jwt_token) {
      throw new Error("Access denied. No token provided.");
    }

    // 2. Verify token
    const decoded = jwt.verify(jwt_token, process.env.JWT_SIGN);

    if (!decoded || !decoded.userId) {
      throw new Error("Invalid token. Access denied.");
    }

    // 3. Find the user from the token
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error("User not found. Please sign up or login again.");
    }

    // 4. Attach user to request object
    req.user = user;
    next();
  } catch (err) {
    catchError(err, res);
    
  }
};
