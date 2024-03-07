const asyncHandler = require("../../helpers/asyncHandler");

exports.earnersPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/topearner", {
        title: "Top Earners"
    })
});

