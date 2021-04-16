const mongoose = require('mongoose')

const registrationTemplate = new mongoose.Schema({
    lastName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true

    },
    phoneNumber:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }


})

module.exports = mongoose.model('regtable', registrationTemplate)