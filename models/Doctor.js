
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
Underscoreid:String , 


dName:String , 


dSpecial:String , 


dAge:Number , 


dGender:String , 


dLeave:String 



})

module.exports = {
  Doctor : mongoose.model('doctor', doctorSchema),
}

