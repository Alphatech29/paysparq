const { registerPageGet } = require("../../controllers/auth/register");
const { loginPageGet } = require("../../controllers/auth/login");
const { resetpasswordPageGet , changepasswordPageGet} = require("../../controllers/auth/resetpassword");









const authRoute = require("express").Router();

//SIGNUPPAGE
authRoute.route("/sign-up").get(registerPageGet)

//SIGN-INPAGE
authRoute.route("/sign-in").get(loginPageGet)

//RESETPASSWORKPAGE
authRoute.route("/reset-password").get(resetpasswordPageGet)

//CHANGEPASSWORKPAGE
authRoute.route("/reset").get(changepasswordPageGet)



module.exports = authRoute