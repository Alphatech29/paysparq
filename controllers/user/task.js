const asyncHandler = require("../../helpers/asyncHandler");

exports.userTaskGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/task/task", {
        title: "Task Dashboard"
    })
})