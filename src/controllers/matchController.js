const Match = require("../models/match");
const matchService = require("../services/matchService");

const MatchController = {
  create: async (req, res) => {
    try {
      const match = await matchService.create(req.body);

      return res.status(200).json({
        msg: "Jogo criado com sucesso!",
        match: match,
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
      const match = await matchService.update(req.params.id, req.body);

      if (match === null) {
        return res.status(404).json({
          msg: "jogo não encontrado",
        });
      }

      return res.status(200).json({
        msg: "Jogo atualizado com sucesso!",
        match
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
      const match = await matchService.getAll();

      return res.status(200).json({
        msg: "Jogos encontrados!",
        match: match,
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
      const match = await matchService.getOne(req.params.id);

      if (match === null) {
        return res.status(404).json({
          msg: "Jogo não existente!",
        });
      }

      return res.status(200).json({
        msg: "Jogo encontrado",
        match,
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
      const match = await matchService.delete(req.params.id);

      if (match === null) {
        return res.status(404).json({
          msg: "Jogo não existente!",
        });
      }
      return res.status(200).json({
        msg: "Jogo deletado!",
        match: match,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
};
module.exports = MatchController;