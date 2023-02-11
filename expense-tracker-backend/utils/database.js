const Sequelize = require ('sequelize')


const sequelize = new Sequelize('expensetrackeraws' , 'root','root',{
    dialect : 'mysql',
    host :'localhost'
})

module.exports = sequelize