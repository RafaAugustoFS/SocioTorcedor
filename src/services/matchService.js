const Match = require("../models/match");

const matchService = {
  create: async (match) => {
    try {
      return Match.create({
        timeVisitante: match.timeVisitante,
        estadio: match.estadio,
        data: match.data,
        horario: match.horario,
        modalidade: match.modalidade,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar o jogo!");
    }
  },
  update: async (id, matchToUpdate) => {
    try {
      const match = await Match.findByPk(id);
      if (!match) {
        return null;
      }
      await match.update(matchToUpdate);
      await match.save();
      return match;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao atualizar o jogo");
    }
  },
  getAll: async () => {
    try {
      const match = await Match.findAll();
      return match;
    } catch (error) {
      throw new Error("Erro ao buscar os jogos.");
    }
  },
  getOne: async(id)=>{
    try {
        const match = await Match.findByPk(id)
        if(!match){
            return null;
        }
    return match;   
    } catch (error) {
        throw new Error("Erro ao buscar o jogo.");
    }
  },
  delete: async(id, matchToDelete) =>{
    const match = await Match.findByPk(id)

    if(!match){
        return null;
    }
    await match.destroy(matchToDelete);
    return match;
  }
};
module.exports = matchService;
