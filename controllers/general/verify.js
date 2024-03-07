const asyncHandler = require("../../helpers/asyncHandler");

exports.verifyPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/verify", {
        title: "Verify Activation Pin"
    })
});

