const Sequelize = require('sequelize')
const sequelize = new Sequelize('nomeDaBaseDeDados', 'User', 'Password',{

    host: 'localhost',
    dialect: 'mysql', 
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    operatorsAliases: false
})

module.exports = {connection: sequelize}