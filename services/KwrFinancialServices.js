const KwrFinancialData = require('../models/KwrFinancialData');

const getAll = async () => {
    const result = await KwrFinancialData.find();
    if (!result || result.length === 0) {
        return new Error('Nenhum dado foi encontrado');
    }
    return result;
}

module.exports = {
    getAll,
}