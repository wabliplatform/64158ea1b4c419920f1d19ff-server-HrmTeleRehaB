
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
Underscoreid:String , 


rName:String , 


rFloor:Number , 


rAisle:Number , 


rEmpty:String 



})

module.exports = {
  Room : mongoose.model('room', roomSchema),
}

