const asyncHandler = require("../../helpers/asyncHandler");

exports.userWalletGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/wallet/wallet", {
        title: "Wallet"
    })
})





exports.userNewwalletGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/wallet/newWallet", {
        title: "Add Wallet"
    })
})