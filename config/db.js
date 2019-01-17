const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user123@ds125469.mlab.com:25469/firsttime', {useNewUrlParser: true});
module.exports= mongoose;