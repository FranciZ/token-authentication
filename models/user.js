var mongoose = require('mongoose');

var Schema = mongoose.Schema({

    email       : { type:String, unique:true},
    password    : String,
    dateCreated : { type:Date, default:Date.now },
    emailToken  : String,
    verified    : Boolean

});

mongoose.model('User', Schema);