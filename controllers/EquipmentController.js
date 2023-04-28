/**
 * The EquipmentController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/EquipmentService');
const createequipment = async (request, response) => {
  await Controller.handleRequest(request, response, service.createequipment);
};

const deleteequipment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteequipment);
};

const getAllequipment = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllequipment);
};

const getequipment = async (request, response) => {
  await Controller.handleRequest(request, response, service.getequipment);
};

const updateequipment = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateequipment);
};


module.exports = {
  createequipment,
  deleteequipment,
  getAllequipment,
  getequipment,
  updateequipment,
};
