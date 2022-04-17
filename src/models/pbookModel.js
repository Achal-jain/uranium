const mongoose = require('mongoose');


const pbookSchema = new mongoose.Schema( {
        
        name:String,
	    price:Number,
        author:String,
        publisher:String,
		ratings:String,
		
}, { timestamps: true });


module.exports = mongoose.model('newBook', pbookSchema)