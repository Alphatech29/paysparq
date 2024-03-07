const asyncHandler = require("../../helpers/asyncHandler");

exports.registerPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("auth/register", {
        title: "Sign Up"
    })
});
