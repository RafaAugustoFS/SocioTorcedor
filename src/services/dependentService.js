const Dependent = require("../models/dependent");

const DependentService ={
    create: async(dependent) =>{
        try {
            return Dependent.create({
                dependent_id:dependent.dependent_id,
                nome:dependent.nome,
                cpf:dependent.cpf,
                data_nascimento:dependent.data_nascimento
            });
        } catch (error) {
            throw new Error("Erro ao criar dependente")
        }
    },
    update: async (id, dependentToUpdate) => {
        try {
          const dependent = await Dependent.findByPk(id);
          if (!dependent) {
            return null;
          }
          await dependent.update(dependentToUpdate);
          await dependent.save();
          return dependent;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao atualizar o dependente.");
        }
      },
      getAll: async () => {
        try {
          const dependent = await Dependent.findAll();
          return dependent;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao buscar os dependentes.");
        }
      },
      getOne: async (id) => {
        try {
          const dependent = await Dependent.findByPk(id);
          if (!dependent) {
            return null;
          }
          return dependent;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao buscar o dependente.");
        }
      },
      delete: async (id) =>{
        try {
            const dependent = await Dependent.findByPk(id);
    
            if(!dependent){
                return null;
            }
            
            await dependent.destroy();
            return dependent;
        } catch (error) {
            console.log(error);
            
            throw new Error("Erro ao deletar o dependente.");
        }
      }
}
module.exports=DependentService;