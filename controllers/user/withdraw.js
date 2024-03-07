const asyncHandler = require("../../helpers/asyncHandler");

exports.userWithdrawGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/withdraw/withdraw", {
        title: "Withdraw"
    })
})