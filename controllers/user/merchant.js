const asyncHandler = require("../../helpers/asyncHandler");

exports.userMerchantGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/vendor/merchant", {
        title: "Merchant Dashbord"
    })
})