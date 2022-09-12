const Router = require("express").Router();
const controller = require("../controllers/OwnerController");

Router.get("/", controller.getAllOwners);
Router.get("/:owner_id", controller.getOwnerById);
Router.post("/", controller.createNewOwner);
Router.put("/:owner_id", controller.updateOwner);
Router.delete("/:owner_id", controller.deleteOwner);

module.exports = Router;
