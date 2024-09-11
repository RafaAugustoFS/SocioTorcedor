const express = require("express");
const sequelize = require('./config/config.js')
const router = require("./routers/router.js");

const app = express();

app.use(express.json());

app.use("/api", router);

app.get("/healthcheck", (req, res) => {
  return res.status(200).json({
    msg: "Estamos vivos!",
    alive: true,
  });
});

sequelize.authenticate()
.then(async () =>{
    console.log("Conexão estabelecida com sucesso!");
    await sequelize.sync({ }); //Sincroniza o código com a tabela
})
.then(() =>{
    app.listen(8080, () =>{
        console.log("#####");
        console.log("Rodando na porta 8080");
        console.log("#####");
    })
})
.catch(() =>{
    console.error( "Erro ao se conectar com o DataBase!");
})