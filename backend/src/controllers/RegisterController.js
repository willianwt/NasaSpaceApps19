const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
    // gerando token 
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    }); 
}

module.exports = {
    async register(req, res) {
        const { email } = req.body; 

        try {
            if(await User.findOne({ email }))
                return res.status(400).send({error: 'User already exists'}); 
            
            const user = await User.create(req.body);

            user.password = undefined;

            return res.send({
                user, 
                token: generateToken({ id: user.id }),
            });
    
        } catch (err) {
            return res.status(400).send({error: 'Registration failed' });
        }
    }
}