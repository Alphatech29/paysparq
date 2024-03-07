const asyncHandler = require("../../helpers/asyncHandler");

exports.userAdduserGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/addNewUser/addNewUser", {
        title: "Add New User"
    })
})