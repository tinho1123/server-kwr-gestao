const KwrUsersServices = require('../services/KwrUsersServices');

async function verificationLogin({ body: { email, senha } }, res) {

    const service = await KwrUsersServices.verificationLoginService({ email, senha });

    if(service instanceof Error) {
        return res.status(401).json({ error: service.message })
    }

    res.status(200).json(service);
}

async function create({ body: { email, senha, admPriority } }, res) {

    

    if (!email) {
        return res.status(400).json({ error: "Necessário inserir seu email!"})
    }

    if (!senha) {
        return res.status(400).json({ error: "Necessário inserir sua senha!"})
    }
    

    const createUser = await KwrData.create({
        email,
        senha,
        admPriority
    });

    return res.status(200).json(createUser)
}



module.exports = {
    verificationLogin,
    create,
}