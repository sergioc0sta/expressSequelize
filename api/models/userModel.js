const Sequelize =  require('sequelize'),
    db = require('../config/database')

const Post = db.connection.define( 'post', {
        firstName: {
            type: Sequelize.STRING,
            field: 'fistName'
        },
        secondName: {
            type: Sequelize.STRING,
            field: 'secoundName'
        }
    } , {
        timestamps: true
    });
    
module.exports = Post