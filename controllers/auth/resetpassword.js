const asyncHandler = require("../../helpers/asyncHandler");

exports.resetpasswordPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("auth/resetpassword", {
        title: "Recover Password"
    })
});






exports.changepasswordPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("auth/changepassword", {
        title: "Set New Password"
    })
});