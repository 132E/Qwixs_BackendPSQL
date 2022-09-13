const Router = require("express").Router();

const OwnerRouter = require("./OwnerRouter");
const BusinessRouter = require("./BusinessRouter");
// const ServiceRouter = require("./ServiceRouter");

Router.use("/owners", OwnerRouter);
Router.use("/businesses", BusinessRouter);
// Router.use("/services", ServiceRouter);

module.exports = Router;
