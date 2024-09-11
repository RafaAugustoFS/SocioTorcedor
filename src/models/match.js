const {DataTypes} = require('sequelize');
const sequelize = require('../config/config');

const Match = sequelize.define ('match', {
    timeVisitante:{
        type: DataTypes.STRING(70),
        allowNull: false
    },
    estadio:{
        type: DataTypes.STRING,
        allowNull: false
    },
    data:{
        type: DataTypes.DATE,
        allowNull: false
    },
    horario:{
        type:DataTypes.STRING(6),
        allowNull: false
    },
    modalidade:{
        type:DataTypes.STRING(30),
        allowNull:false
    }
})
module.exports = Match;