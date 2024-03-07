const logger = require("../helpers/logger");

const errorMiddleware = (err, req, res, next) => {
  if (process.env.NODE_ENV === "dev") {
    console.log(err);
  }

  const status = err.statusCode || 500;
  const message = err.message || "Server Error";

  logger.debug({ status, message });

  if (req.method.toLowerCase() !== "get") {
    res.status(status).json({
      success: false,
      message: "Something Went Wrong",
      errorCode: status
    });
  } else {
    res.render("error/error", {
      title: "Something Went Wrong",
      text: message,
      errorCode: status
    });
  }
};

module.exports = errorMiddleware;
