const asyncHandler = require("../../helpers/asyncHandler");

exports.loginPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("auth/login", {
        title: "Sign-In"
    })
});
