const Router = require("express").Router();
const controller = require("../controllers/ServiceController");

Router.get("/", controller.getAllServices);
Router.get("/:service_id", controller.getServiceById);
Router.post("/:business_id", controller.createNewService);
Router.put("/:service_id", controller.updateService);
Router.delete("/:service_id", controller.deleteService);

module.exports = Router;
