const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const library = new Schema({
    
    bookTitle : {
        type : String,
        required : true
    },

    years : {
        type : String,
        required: true
    },

    bookNumber : {
        type : String ,
        required : true
    },

    status : {
        type : String,
        required : true
        
    }

})

module.exports = mongoose.model("library",library);