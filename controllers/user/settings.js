const asyncHandler = require("../../helpers/asyncHandler");

exports.userProfileGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/settings/profile", {
        title: "Profile"
    })
})




exports.userSecurityGet = asyncHandler(async (req, res, next) => {
    
    res.render("user/pages/settings/security", {
        title: "Security"
        
    });
    
})




exports.userBlockGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/partials/block", {
        title: "Block"
    })
})