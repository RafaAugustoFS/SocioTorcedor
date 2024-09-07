const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('sociotorcedor', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;