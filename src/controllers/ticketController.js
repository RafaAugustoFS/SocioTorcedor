const ticketService = require("../services/ticketService");

const ticketController = {
  buy: async (req, res) => {
    try {
      ticket = await ticketService.buy(req.body);

      return res.status(200).json({
        msg: "Ingresso comprado com sucesso!",
        ticket,
      });
    } catch (error) {
        console.log(error);
        
      res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      ticket = await ticketService.getAll();
      return res.status(200).json({
        msg: "Busca concluída com sucesso!",
        ticket,
      });
    } catch (error) {
      res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
  getOne: async(req, res) =>{
    try {
        ticket = await ticketService.getOne(req.params.id)

    if(ticket === null){
        return res.status(404).json({
            msg: "Ingresso não encontrado!"
        })
    }
    return res.status(200).json({
        msg:"Ingresso encontrado com êxito!",
        ticket
    })
    } catch (error) {
        res.status(500).json({
            msg: "Acione o suporte!",
          });
    }
  },
  delete: async(req, res) =>{
    try {
        ticket = await ticketService.delete(req.params.id)

        if(ticket === null){
            return res.status(404).json({
                msg: "Ingresso não encontrado!"
            })
        }
        return res.status(200).json({
            msg:"Ingresso deletado com sucesso!",
            ticket
        })
    } catch (error) {
        res.status(500).json({
            msg: "Acione o suporte!",
          });
    }
  }
};
module.exports = ticketController;
