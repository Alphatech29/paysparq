const asyncHandler = require("../../helpers/asyncHandler");

exports.userProductVendorGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/market/market/vendor", {
        title: "Vendor"
    })
})