const asyncHandler = require("../../helpers/asyncHandler");

exports.userProductListGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/market/myProduct/productList", {
        title: " My Product's "
    })
})