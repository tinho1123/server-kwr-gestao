const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.DBCONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;