const { Owner, Business } = require("../models");

// GET all owners
const getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.findAll();
    res.send(owners);
  } catch (error) {
    throw error;
  }
};

// GET one owner by id
const getOwnerById = async (req, res) => {
  try {
    const owner = await Owner.findByPk(req.params.owner_id, {
      include: [{ model: Business }],
    });
    res.send(owner);
  } catch (error) {
    throw error;
  }
};

// Create a new owner
const createNewOwner = async (req, res) => {
  try {
    let newOwner = await Owner.create(req.body);
    res.send(newOwner);
  } catch (error) {
    throw error;
  }
};

// Delete an owner
const deleteOwner = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.owner_id);
    let deletedOwner = await Owner.destroy({
      where: { id: ownerId },
    });
    res.send(`Owner ${ownerId} closed down their business.`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllOwners,
  getOwnerById,
  createNewOwner,
  deleteOwner,
};
