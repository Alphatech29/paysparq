const asyncHandler = require("../../helpers/asyncHandler");

exports.userContestGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/contest/contest", {
        title: "Contest"
    })
})