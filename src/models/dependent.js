const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const User = require("./user");

const Dependent = sequelize.define('dependent',{
    dependent_id:{
        type:DataTypes.INTEGER,
        references:{
            model:User,
            references:'id'
        },
        allowNull:false
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    data_nascimento:{
        type: DataTypes.DATE,
        allowNull:false
    }
})
module.exports=Dependent;