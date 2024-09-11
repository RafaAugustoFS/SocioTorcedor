const Match = require('../models/match');

const MatchController = {
    create: async (req,res) => {
        try {
            const {timeVisitante, estadio, data, horario, modalidade} = req.body;

            console.log(timeVisitante, estadio, data, horario, modalidade);
            const matchCreate = await Match.create({timeVisitante, estadio, data, horario, modalidade});

            return res.status(200).json({
                msg: "Jogo criado com sucesso!",
                match: matchCreate
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
            const {timeVisitante, estadio, data, horario, modalidade} = req.body;

            const matchUpdate = await Match.findByPk(id);

            if(matchUpdate === null){
                return res.status(404).json({
                    msg: "jogo não encontrado"
                })
            }

            const updated = await matchUpdate.update({
                timeVisitante, estadio, data, horario, modalidade
            })

            if(updated) {
                return res.status(200).json({
                    msg: "Jogo atualizado com sucesso!"
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
            const jogos = await Match.findAll();

            return res.status(200).json({
                msg:"Jogos encontrados!",
                match: jogos
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
            const matchFinded = await Match.findByPk(id);

        if(matchFinded == null){
            return res.status(500).json({
                msg: "Jogo não existente!"
            })
        }

        return res.status(200).json({
            msg: "Jogo encontrado",
            match: matchFinded
        })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Acione o suporte!"
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const matchFinded = await Match.findByPk(id);

            if(matchFinded == null){
                return res.status(500).json({
                    msg: "Jogo não existente!"
                })
            }

            await matchFinded.destroy();
            return res.status(200).json({
                msg: "Jogo deletado!",
                match: matchFinded
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Acione o suporte!"
            })
        }
            
    }
};
module.exports = MatchController;