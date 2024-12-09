const {DataTypes} = require('sequelize');
const sequelize = require('../config/config.js');

const User = sequelize.define('user', {
    nome: {
        type:DataTypes.STRING(100),
        allowNull: false
    },
    plano:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    address:{
        type: DataTypes.STRING(200),
        allowNull: false
    },
    data_nascimento:{
        type: DataTypes.DATE,
        allowNull:false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: true,
        unique:true
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports = User;