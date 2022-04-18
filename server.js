require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./config/dbConfig');

const app = express();

const kwrUsersRoutes = require('./routes/kwrUsersRoutes');
const KwrFinancialRoutes = require('./routes/kwrFinancialRoutes');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', kwrUsersRoutes);

app.use('/gestao-de-pedidos', KwrFinancialRoutes)


app.listen(port, () => console.log(`rodando na porta ${port}`));