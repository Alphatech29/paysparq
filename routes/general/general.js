const { homePageGet } = require("../../controllers/general/home");
const { merchantPageGet } = require("../../controllers/general/merchant");
const { verifyPageGet } = require("../../controllers/general/verify");
const { shoppingPageGet , jobPageGet } = require("../../controllers/general/shopping");
const { earnersPageGet } = require("../../controllers/general/topearners");
const { blogPageGet , singlePageGet } = require("../../controllers/general/blog");
const { contactPageGet } = require("../../controllers/general/contact");
const { aboutPageGet , faqPageGet } = require("../../controllers/general/aboutUs");









const generalRoute = require("express").Router();

//HOMEPAGE
generalRoute.route("/").get(homePageGet)

//SHOPPINGPAGE
generalRoute.route("/marketplace").get(shoppingPageGet)

//TOPEARNERPAGE
generalRoute.route("/top-earner").get(earnersPageGet)

//MERCHANTPAGE
generalRoute.route("/merchant").get(merchantPageGet)

//VERIFYPAGE
generalRoute.route("/verify-pin").get(verifyPageGet)

//BLOGPAGE
generalRoute.route("/blog").get(blogPageGet)

//SINGLEBLOGPAGE
generalRoute.route("/post").get(singlePageGet)

//JOBPAGE
generalRoute.route("/job").get(jobPageGet)

//ABOUTUSPAGE
generalRoute.route("/about-us").get(aboutPageGet)

//FAQSPAGE
generalRoute.route("/faqs").get(faqPageGet)

//CONTACTPAGE
generalRoute.route("/contact-us").get(contactPageGet)




module.exports = generalRoute