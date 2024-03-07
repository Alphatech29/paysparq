const asyncHandler = require("../../helpers/asyncHandler");

exports.userSpinGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/spin&win/spin&win", {
        title: "Bitpluse Spinning"
    })
})