const asyncHandler = require("../../helpers/asyncHandler");

exports.userUpgradeGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/upgrade/upgrade", {
        title: "Upgrade"
    })
})