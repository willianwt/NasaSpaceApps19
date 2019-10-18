const mongoose = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate'); 
const bcrypt = require('bcryptjs'); 

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    cpf: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.pre('save', async function(next){
    if(this.password !== null) {
        const hash = await bcrypt.hash(this.password, 10); 
        this.password = hash;
        next();    
    }
    next();
})

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema); 