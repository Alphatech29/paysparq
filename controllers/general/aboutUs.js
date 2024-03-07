const asyncHandler = require("../../helpers/asyncHandler");

exports.aboutPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/aboutUs", {
        title: "About Us"
    })
});





exports.faqPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/faqs", {
        title: "Frequently asked questions"
    })
});

