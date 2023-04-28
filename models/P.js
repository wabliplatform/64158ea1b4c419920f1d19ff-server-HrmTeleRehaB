
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pSchema = new Schema({
Underscoreid:String , 


ptitle:String 



})

module.exports = {
  P : mongoose.model('p', pSchema),
}

