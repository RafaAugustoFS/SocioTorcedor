const { DataTypes } = require('sequelize');
const sequelize= require('../config/config');
const User = require('./user');
const Match = require('./match');

const Ticket = sequelize.define('ticket', {
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model:User,
            key:"id"
        }
    },
    match_id:{
        type: DataTypes.INTEGER,
        references:{
            model:Match,
            key:"id"
        }
    },
    setor:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cadeira:{
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = Ticket;