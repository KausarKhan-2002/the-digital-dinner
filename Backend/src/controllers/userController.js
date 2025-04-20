const { createTokenSaveCookie } = require("../config/createTokenSaveCookie");
const { catchError } = require("../helper/catchError");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");

exports.signup = async (req, res) => {
  try {
    // 1. Destructure incoming fields from the request body
    const { name, email, password, confirmPassword, address, avatar } =
      req.body;

    // 2. Prepare a newUser object to store validated & processed data
    const newUser = {};

    // 3. Validate and assign name
    if (name) newUser.name = name;

    // 4. Validate email format before assigning
    if (email) {
      const isValid = validator.isEmail(email);
      if (!isValid) throw new Error("Email address is not valid");
      newUser.email = email;

      // 5. Check if the email already exists in DB
      const existingUser = await User.findOne({ email });
      if (existingUser) throw new Error("Email is already registered");
    }

    // 6. Validate password strength & match confirmation
    if (password) {
      const isValid = validator.isStrongPassword(password);
      if (!isValid) {
        throw new Error("Password is weak, Please provide a strong password");
      }

      if (password !== confirmPassword) {
        throw new Error("Password and confirm password do not match");
      }

      // 7. Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
      newUser.password = hashedPassword;
    }

    // 8. If address is provided, structure and assign it
    if (typeof address === "object") {
      newUser.address = {
        street: address.street || null,
        city: address.city || null,
        pincode: address.pincode || null,
      };
    }

    // 9. If avatar is provided, validate it's a URL and assign it
    if (avatar) {
      const isValidURL = validator.isURL(avatar);
      if (!isValidURL) throw new Error("Avatar URL is not valid");
      newUser.avatar = avatar;
    }

    // 10. Create new user in MongoDB using Mongoose
    const user = await User.create(newUser); // Correct method to save a document

    // 11. Send success response with user data (optional: remove password from user object)
    res.status(200).json({
      success: true,
      message: "You have signed up successfully",
      user,
    });
  } catch (err) {
    // Centralized error handler to catch and respond with error messages
    catchError(err, res);
  }
};