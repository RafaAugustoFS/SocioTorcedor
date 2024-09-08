const User = require('./models/user.js');

const UserController = {
    create: async(req, res) =>{
        try {
            const {nome, email, plano, cpf, phone, password} = req.body;

            console.log(nome, email, plano, cpf, phone, password);
            const userCreate = await User.create({nome, email, plano, cpf, phone, password});

            return res.status(200).json({
                msg: "Usuário criado com sucesso!",
                user: userCreate
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Acione o suporte!"
            })
        }
    },
    update: async(req, res) =>{
        try {
            const { id } = req.params;
            const {nome, email, plano, cpf, phone, password} = req.body;

            const userUpdate = await User.FindByPk(id);

            if(userUpdate === null){
                return res.status(404).json({
                    msg: "usuario não encontrado"
                })
            }

            const updated = await userUpdate.update({
                nome, email, plano, cpf, phone, password
            })

            if(updated) {
                return res(200).json({
                    msg: "Usuário atualizado com sucesso!"
                })
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Acione o suporte!"
            })
        }
    },
    getAll: async(req,res) =>{
        try {
            const usuario = await User.findAll();

            return res.status(200)({
                msg:"Usuários encontrados!",
                users: usuario
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Acione o suporte!"
            })
        }
    },
    getOne: async(req, res) =>{
        try {
            const { id } = req.params;
            const userFinded = await User.FindByPk(id);

        if(userFinded == null){
            return res.status(500).json({
                msg: "Usuário não existente!"
            })
        }

        return res.status(200).json({
            msg: "Usuário encontrado",
            user: userFinded
        })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Acione o suporte!"
            })
        }
    },
    delete: async (req, res) => {
            const { id } = req.params;
            const userFinded = await User.FindByPk(id);

        if(userFinded == null){
            return res.status(500).json({
                msg: "Usuário não existente!"
            })
        }
        
        await userFinded.destroy
        return res.status(200).json({
            msg: "Usuário deletado!",
        })
    }
}
module.exports = UserController;