const asyncHandler = require("../../helpers/asyncHandler");

exports.userJobGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/job/job", {
        title: "Job Dashboard"
    })
})