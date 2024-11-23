const UserService = require("../services/userService.js");

const UserController = {
  create: async (req, res) => {
    try {
      const user = await UserService.create(req.body);
      return res.status(201).json({
        msg: "Usuário criado com sucesso!",
        user: user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
  update: async (req, res) => {
    try {
        const user = await UserService.update(req.params.id, req.body)
      if (user === null) {
        return res.status(404).json({
          msg: "usuario não encontrado",
        });
      }

      return res.status(200).json({
        msg: "Usuário atualizado com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const user = await UserService.getAll();

      return res.status(200).json({
        msg: "Usuários encontrados!",
        users: user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const user = await UserService.getOne(req.params.id);

      if (user === null) {
        return res.status(500).json({
          msg: "Usuário não existente!",
        });
      }

      return res.status(200).json({
        msg: "Usuário encontrado",
        user: user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const user = UserService.delete(req.params.id);
      if (user === null) {
        return res.status(500).json({
          msg: "Usuário não existente!",
        });
      }
      return res.status(200).json({
        msg: "Usuário deletado!"
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
};
module.exports = UserController;