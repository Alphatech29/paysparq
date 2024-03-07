const asyncHandler = require("../../helpers/asyncHandler");

exports.userCourseGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/courses/courses", {
        title: "Courses"
    })
})