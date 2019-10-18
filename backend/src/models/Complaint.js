const mongoose = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate'); 

const ComplaintSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


ComplaintSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Complaint', ComplaintSchema); 