    
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0-fnac2.mongodb.net/test?retryWrites=true&w=majority");
module.exports = mongoose;