const asyncHandler = require("../../helpers/asyncHandler");

exports.userReferralGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/referral/referral", {
        title: "Referral"
    })
});

