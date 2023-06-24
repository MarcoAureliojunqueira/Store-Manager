const passengerModel = require('../models/produts.model');

const findAll = async () => {
  const passengers = await passengerModel.produtos();
  return { type: null, message: passengers };
};

module.exports = {
  findAll,
};
