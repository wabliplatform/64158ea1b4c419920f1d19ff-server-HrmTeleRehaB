/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { P } = require('../models/P');

/**
* Creates the data
*
* p P data to be created
* returns p
* */
const createp = ({ p }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new P(p).save();
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
* pId String the Id parameter
* no response value expected for this operation
* */
const deletep = ({ pId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await P.findOneAndDelete({ _id:pId }).exec();
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
const getAllp = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await P.find().exec();
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
* pId String the Id parameter
* returns p
* */
const getp = ({ pId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await P.findById(pId)
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
* pId String the Id parameter
* p P data to be updated (optional)
* returns p
* */
const updatep = ({ pId, p }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await P.findOneAndUpdate({ _id:pId },p).exec();
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
  createp,
  deletep,
  getAllp,
  getp,
  updatep,
};
