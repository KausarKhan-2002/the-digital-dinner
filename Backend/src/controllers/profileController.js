const { catchError } = require("../helper/catchError");

exports.getProfile = (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      throw new Error("you are not authorised");
    }

    res
      .status(200)
      .json({ success: true, message: "retreved your profile", user });
  } catch (err) {
    catchError(err, res);
  }
};
