const Router = require("express").Router();
const controller = require("../controllers/BusinessController");

Router.get("/", controller.getAllBusinesses);
Router.get("/:business_id", controller.getBusinessById);
Router.post("/:owner_id", controller.createNewBusiness);
Router.put("/:business_id", controller.updateBusiness);
Router.delete("/:business_id", controller.deleteBusiness);

module.exports = Router;
