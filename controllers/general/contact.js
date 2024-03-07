const asyncHandler = require("../../helpers/asyncHandler");

exports.contactPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/contact", {
        title: "Contact Us"
    })
});



