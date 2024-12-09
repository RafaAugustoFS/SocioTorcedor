const DependentService = require("../services/dependentService");

const dependentController={
    create: async (req, res) => {
        try {
          const dependent = await DependentService.create(req.body);
          return res.status(201).json({
            msg: "Dependente criado com sucesso!",
            dependent: dependent,
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
            const dependent = await DependentService.update(req.params.id, req.body)
          if (dependent === null) {
            return res.status(404).json({
              msg: "Dependente não encontrado",
            });
          }
    
          return res.status(200).json({
            msg: "Dependente atualizado com sucesso!",
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
          const dependent = await DependentService.getAll();
    
          return res.status(200).json({
            msg: "Dependentes encontrados!",
            dependents: dependent,
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
          const dependent = await DependentService.getOne(req.params.id);
    
          if (dependent === null) {
            return res.status(500).json({
              msg: "Dependente não existente!",
            });
          }
    
          return res.status(200).json({
            msg: "Dependente encontrado",
            dependent: dependent,
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
          const dependent = DependentService.delete(req.params.id);
          if (dependent === null) {
            return res.status(500).json({
              msg: "Dependente não existente!",
            });
          }
          return res.status(200).json({
            msg: "Dependente deletado!"
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({
            msg: "Acione o suporte!",
          });
        }
      },
}
module.exports=dependentController;