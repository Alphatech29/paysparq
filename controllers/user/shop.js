const asyncHandler = require("../../helpers/asyncHandler");

exports.userShopGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/market/shop", {
        title: "Market Place"
    })
})