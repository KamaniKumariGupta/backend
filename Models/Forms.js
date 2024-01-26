const mongoose = require('mongoose')

const form = new mongoose.Schema({
  name:{
  type:String,
  required:true
},
PNo:{
  type:Number,
  required:true
},
email:{
  type:String,
  required:true
}
})

module.exports = mongoose.model("Form",form)