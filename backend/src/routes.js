const express = require('express');
const authMiddleware = require('./middlewares/auth');

const AuthController = require('./controllers/AuthController'); 
const RegisterController = require('./controllers/RegisterController'); 
const UserController = require('./controllers/UserController');

const routes = express.Router(); 

routes.get('/', (req, res) => {
    return res.send('Hello World!');
})

// ==> USER ROUTES
routes.get('/users', authMiddleware, UserController.index);
routes.get('/users/:id', authMiddleware, UserController.show);
routes.post('/users', authMiddleware, UserController.store);
routes.put('/users/:id', authMiddleware, UserController.update);
routes.delete('/users/:id', authMiddleware, UserController.destroy);

// ==> REGISTER ROUTE
routes.post('/register', authMiddleware, RegisterController.register); 

// ==> AUTHENTICATION  ROUTE
routes.post('/auth', AuthController.auth); 

module.exports = routes; 