exports.catchError = (err, res) => {
    const statusCode = err.statusCode || 400;
    res.status(statusCode).json({
      success: false,
      message: err.message || "Something went wrong.",
    });
  };