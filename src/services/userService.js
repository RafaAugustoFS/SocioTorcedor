const User = require("../models/user");
const bcrypt = require("bcryptjs");

const UserService = {
  create: async (user) => {
    try {
      if (!user.password) {
        throw new Error("Senha não fornecida.");
      }

      const passwordCrypto = await bcrypt.hash(user.password, 10);
      return await User.create({
        nome: user.nome,
        email: user.email,
        plano: user.plano,
        address: user.address,
        cpf: user.cpf,
        data_nascimento: user.data_nascimento,
        phone: user.phone,
        password: passwordCrypto,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar o usuário!");
    }
  },
  update: async (id, userToUpdate) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return null;
      }
      await user.update(userToUpdate);
      await user.save();
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao atualizar o usuário.");
    }
  },
  getAll: async () => {
    try {
      const user = await User.findAll();
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao buscar os usuários.");
    }
  },
  getOne: async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao buscar o usuário.");
    }
  },
  delete: async (id) =>{
    try {
        const user = await User.findByPk(id);

        if(!user){
            return null;
        }
        
        await user.destroy();
        return user;
    } catch (error) {
        console.log(error);
        
        throw new Error("Erro ao deletar o usuário.");
    }
  }
};
module.exports = UserService;
