const mongoose = require('mongoose');
const Schema = mongoose.Schema;// store Schema variable

const listingSchema = new Schema({
    title:{
        type: String,
        require : true,
    },
    
    description : String,
    image : String,
    price : Number,
    location : String,
    country : String,
});
const Listing = mongoose.model("Listing",listingSchema);
module.exports= Listing;