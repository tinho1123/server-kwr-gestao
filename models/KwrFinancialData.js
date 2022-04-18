const mongoose = require('mongoose');

const KwrFinancialData = new mongoose.Schema({
  data: { type: Date, required: true },
  valor: { type: String, required: true },
  metodo_pagamento: { type: String, required: true }
});

module.exports = mongoose.model('financial', KwrFinancialData);