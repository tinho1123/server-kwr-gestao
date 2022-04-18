const KwrData = require('../models/KwrUsersData');

const verificationLoginService = async ({ email, senha }) => {
    if (!email) {
        return new Error('Dados não passados corretamente')
    }
    const [data] = await KwrData.find({ email });
    
    if (!data || data === []) {
        return  new Error('Email não cadastrado');
    }  
    if (!senha || senha != data.senha) {
        return new Error('Senha Incorreta');
    }
    


    return true;
}

module.exports = {
    verificationLoginService,
}