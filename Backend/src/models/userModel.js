const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 30,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    validate: (email) => {
      const isEmailValid = validator.isEmail(email);
      if (!isEmailValid) throw new Error("Email is not valid");
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },

  role: {
    type: String,
    trim: true,
    enum: ["user", "seller", "admin"],
    default: "user",
  },

  address: {
    street: {
      type: String,
      minLength: 5,
      maxLength: 50,
    },
    city: {
      type: String,
      minLength: 5,
      maxLength: 50,
    },
    pincode: {
      type: Number,
    },
    avatar: {
      type: String,
      validate: (avatar) => {
        const isValid = validator.isURL(avatar);
        if (!isValid) throw new Error("Avatar url is not valid");
      },
    },
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;