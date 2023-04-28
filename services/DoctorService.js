/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Doctor } = require('../models/Doctor');

/**
* Creates the data
*
* doctor Doctor data to be created
* returns doctor
* */
const createdoctor = ({ doctor }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Doctor(doctor).save();
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
* doctorId String the Id parameter
* no response value expected for this operation
* */
const deletedoctor = ({ doctorId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Doctor.findOneAndDelete({ _id:doctorId }).exec();
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
const getAlldoctor = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Doctor.find().exec();
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
* doctorId String the Id parameter
* returns doctor
* */
const getdoctor = ({ doctorId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Doctor.findById(doctorId)
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
* doctorId String the Id parameter
* doctor Doctor data to be updated (optional)
* returns doctor
* */
const updatedoctor = ({ doctorId, doctor }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Doctor.findOneAndUpdate({ _id:doctorId },doctor).exec();
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
  createdoctor,
  deletedoctor,
  getAlldoctor,
  getdoctor,
  updatedoctor,
};
