const bcrypt = require('bcryptjs');
const User = require('../models/User'); 
const jwt = require('jsonwebtoken');

// importando o secretHash 
const authConfig = require('../config/auth.json');

// function geradora de token's 
function generateToken(params = {}) {
    // gerando token 
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    }); 
}

module.exports = {
    async auth(req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password'); 

        
        if(!user || user.operator === false){
            res.status(400).send({error: 'User not found'});
        }
    

        // comparação de hash's 
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({error: 'Invalid password'});
            
        //removendo o password da resposta 
        user.password = undefined; 
    
        return res.send({
             user, 
             token: generateToken({ id: user.id })
        });
        
    }    
}
