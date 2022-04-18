const KwrFinancialServices = require('../services/KwrFinancialServices');

const getAll = async (_req, res) => {
    const result = await KwrFinancialServices.getAll();
    
    if (result instanceof Error) {
        res.status(402).json({ message: result.message });
    };

    res.status(200).json(result);
}

module.exports = {
    getAll,

}