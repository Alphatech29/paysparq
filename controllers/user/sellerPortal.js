const asyncHandler = require("../../helpers/asyncHandler");

exports.userSellerGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/market/sellerPortal", {
        title: "Seller Portal"
    })
})