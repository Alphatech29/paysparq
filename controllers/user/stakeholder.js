const asyncHandler = require("../../helpers/asyncHandler");

exports.userStakeholderGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/stakeholder/stakeholder", {
        title: "Stakeholder"
    })
})