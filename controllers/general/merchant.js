const asyncHandler = require("../../helpers/asyncHandler");

exports.merchantPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/merchant", {
        title: "Merchants"
    })
});








