const mongoose = require('mongoose');
const User = mongoose.Schema({
    FirstName:{
      type:String,
      require:true
    },
    lastName:{
      type:String,
      require:true
    },
    Email:{
        type:String,
        require:true
    },
    Phoneno:{
        type:Number,
        require:true
    }

})
module.exports = mongoose.model("User", User)
