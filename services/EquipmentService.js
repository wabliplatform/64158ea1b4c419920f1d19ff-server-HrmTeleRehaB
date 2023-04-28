/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Equipment } = require('../models/Equipment');

/**
* Creates the data
*
* equipment Equipment data to be created
* returns equipment
* */
const createequipment = ({ equipment }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Equipment(equipment).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* equipmentId String the Id parameter
* no response value expected for this operation
* */
const deleteequipment = ({ equipmentId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Equipment.findOneAndDelete({ _id:equipmentId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllequipment = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Equipment.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* equipmentId String the Id parameter
* returns equipment
* */
const getequipment = ({ equipmentId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Equipment.findById(equipmentId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* equipmentId String the Id parameter
* equipment Equipment data to be updated (optional)
* returns equipment
* */
const updateequipment = ({ equipmentId, equipment }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Equipment.findOneAndUpdate({ _id:equipmentId },equipment).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createequipment,
  deleteequipment,
  getAllequipment,
  getequipment,
  updateequipment,
};
