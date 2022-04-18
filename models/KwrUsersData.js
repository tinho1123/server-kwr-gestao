const mongoose = require('mongoose');

const KwrUsersDataSchema = new mongoose.Schema({
    email: String,
    senha: String,
    admPriority: Boolean
});

module.exports = mongoose.model('users', KwrUsersDataSchema);