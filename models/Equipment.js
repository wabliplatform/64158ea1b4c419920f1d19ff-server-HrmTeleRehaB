
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
Underscoreid:String , 


eqName:String , 


eqType:String , 


eqCost:Number , 


eqFix:String 



})

module.exports = {
  Equipment : mongoose.model('equipment', equipmentSchema),
}

