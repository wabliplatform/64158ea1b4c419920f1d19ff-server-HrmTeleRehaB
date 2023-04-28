/**
 * The PController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PService');
const createp = async (request, response) => {
  await Controller.handleRequest(request, response, service.createp);
};

const deletep = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletep);
};

const getAllp = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllp);
};

const getp = async (request, response) => {
  await Controller.handleRequest(request, response, service.getp);
};

const updatep = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatep);
};


module.exports = {
  createp,
  deletep,
  getAllp,
  getp,
  updatep,
};
