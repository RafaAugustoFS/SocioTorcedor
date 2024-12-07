const Ticket = require("../models/ticket");

const ticketService={
    buy: async(ticket)=>{
        try {
            return Ticket.create({
                user_id: ticket.user_id,
                match_id: ticket.match_id,
                setor: ticket.setor,
                cadeira: ticket.cadeira
            })   
        } catch (error) {
            throw new Error("Erro ao comprar ingresso.")
        }
    },
    getAll: async()=>{
        try {
            const ticket = await Ticket.findAll();
            return ticket;
        } catch (error) {
            throw new Error("Erro ao buscar ingressos.")
        }
    },
    getOne: async(id)=>{
        try {
            const ticket = await Ticket.findByPk(id)
            
            return ticket;
        } catch (error) {
            throw new Error("Erro ao buscar ingresso único.")
        }
    },
    delete:async(id)=>{
        try {
            const ticket = await Ticket.findByPk(id);
            if(!ticket){
                return null;
            }
            await ticket.destroy();
            return ticket;
        } catch (error) {
            throw new Error("Erro ao deletar ingresso.")
        }
    }
}
module.exports=ticketService;