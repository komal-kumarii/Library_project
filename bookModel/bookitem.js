const mongoose = require('mongoose')
// const item = require('../model/item')
const Schema = mongoose.Schema
const itemSchema = new Schema({
    book_name:{
        type:String,
        required:true
    },
    book_num:{
        type:Number,
        required:true
    },
    booktype:{
        type:String,
        required:true
        
    }
})

module.exports=item=mongoose.model('bookdatas',itemSchema)