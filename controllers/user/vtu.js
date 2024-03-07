const asyncHandler = require("../../helpers/asyncHandler");

exports.userVtuGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/vtu/vtu", {
        title: "VTU Portal"
    })
})