/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Room } = require('../models/Room');

/**
* Creates the data
*
* room Room data to be created
* returns room
* */
const createroom = ({ room }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Room(room).save();
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
* roomId String the Id parameter
* no response value expected for this operation
* */
const deleteroom = ({ roomId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Room.findOneAndDelete({ _id:roomId }).exec();
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
const getAllroom = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Room.find().exec();
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
* roomId String the Id parameter
* returns room
* */
const getroom = ({ roomId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Room.findById(roomId)
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
* roomId String the Id parameter
* room Room data to be updated (optional)
* returns room
* */
const updateroom = ({ roomId, room }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Room.findOneAndUpdate({ _id:roomId },room).exec();
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
  createroom,
  deleteroom,
  getAllroom,
  getroom,
  updateroom,
};
