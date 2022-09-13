const { Business, Owner, Service } = require("../models");

// GET all businesses
const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.findAll({
      include: [{ model: Owner }, { model: Service }],
    });
    res.send(businesses);
  } catch (error) {
    throw error;
  }
};

// GET one business by id
const getBusinessById = async (req, res) => {
  try {
    const business = await Business.findByPK(req.params.business_id, {
      include: [{ model: Owner }, { model: Service }],
    });
    res.send(business);
  } catch (error) {
    throw error;
  }
};

// Create a new business
const createNewBusiness = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.owner_id);
    let newBusiness = { ownerId, ...req.body };
    let business = await Business.create(newBusiness);
    res.send(business);
  } catch (error) {
    throw error;
  }
};

// Update a business
const updateBusiness = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id);
    let updatedBusiness = await Business.update(req.body, {
      where: { id: businessId },
      returning: true,
    });
    res.send(updatedBusiness);
  } catch (error) {
    throw error;
  }
};

// Delete a business
const deleteBusiness = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id);
    let deletedBusiness = await Business.destroy({
      where: { id: businessId },
    });
    res.send(`Business ${businessId} has been deleted.`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBusinesses,
  getBusinessById,
  createNewBusiness,
  updateBusiness,
  deleteBusiness,
};
