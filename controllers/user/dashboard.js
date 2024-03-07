const asyncHandler = require("../../helpers/asyncHandler");

exports.userDashboardGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/dashboard/dashboard", {
        title: "User Dashboard"
    })
});

