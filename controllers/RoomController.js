/**
 * The RoomController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/RoomService');
const createroom = async (request, response) => {
  await Controller.handleRequest(request, response, service.createroom);
};

const deleteroom = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteroom);
};

const getAllroom = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllroom);
};

const getroom = async (request, response) => {
  await Controller.handleRequest(request, response, service.getroom);
};

const updateroom = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateroom);
};


module.exports = {
  createroom,
  deleteroom,
  getAllroom,
  getroom,
  updateroom,
};
