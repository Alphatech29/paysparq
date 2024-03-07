const asyncHandler = require("../../helpers/asyncHandler");

exports.shoppingPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/shopping/shopping", {
        title: "Market place"
    })
});






exports.jobPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/job", {
        title: "Job"
    })
});