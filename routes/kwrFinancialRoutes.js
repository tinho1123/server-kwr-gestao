const express = require('express');

const routes = express.Router();

const kwrFinancialControllers = require('../controllers/KwrFinancialControllers');

routes.get('/createfinancial', kwrFinancialControllers.getAll)


module.exports = routes;