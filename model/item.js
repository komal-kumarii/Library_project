const mongoose = require('mongoose')
const Schema = mongoose.Schema
const itemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:String
    }
})

module.exports=item=mongoose.model('userdata',itemSchema)