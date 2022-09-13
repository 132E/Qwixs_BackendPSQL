const { Business, Service } = require("../models");

// GET all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.send(services);
  } catch (error) {
    throw error;
  }
};

// GET one service by id
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.service_id, {
      include: [{ model: Business }],
    });
    res.send(service);
  } catch (error) {
    throw error;
  }
};

// Create a new service
const createNewService = async (req, res) => {
  try {
    let newService = await Service.create(req.body);
    res.send(newService);
  } catch (error) {
    throw error;
  }
};

// Update a service
const updateService = async (req, res) => {
  try {
    let serviceId = parseInt(req.params.service_id);
    let updatedService = await Service.update(req.params.service_id, {
      where: { id: serviceId },
      returning: true,
    });
    res.send(updatedService);
  } catch (error) {
    throw error;
  }
};

// Delete a service
const deleteService = async (req, res) => {
  try {
    let serviceId = parseInt(req.params.service_id);
    let deletedService = await Service.destroy({
      where: { id: serviceId },
    });
    res.send(`Service ${serviceId} has been deleted.`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllServices,
  getServiceById,
  createNewService,
  updateService,
  deleteService,
};
