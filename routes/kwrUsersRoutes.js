const express = require('express');

const routes = express.Router();

const KwrUsersControllers = require('../controllers/KwrUsersControllers');


// Rota KwrUsers

routes.post('/login', KwrUsersControllers.verificationLogin)
routes.post('/createuser', KwrUsersControllers.create)

module.exports = routes;