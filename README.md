instalar
    -> npm i
executar
    -> npm run dev




configurar ficheiro database.js
    Sequelize('DATABASE', 'USER', 'PASSWORD',{
    host: 'IP',
    dialect: 'mysql', 
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    operatorsAliases: false
})
