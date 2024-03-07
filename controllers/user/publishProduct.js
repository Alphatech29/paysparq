const asyncHandler = require("../../helpers/asyncHandler");

exports.userpublishProductGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/market/market/publishProduct/publishProduct", {
        title: "Publish"
    })
})