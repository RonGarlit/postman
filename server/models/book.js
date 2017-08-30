'use strict';
module.exports = (sequelize, DataTypes) => {
    var book = sequelize.define('book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: DataTypes.STRING,
        publicationDate: DataTypes.DATEONLY,
        isbn: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return book;
};