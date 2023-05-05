const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown")
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender:{
         type: DataTypes.ENUM("Female", "Male")
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING
      }
   }, { timestamps: false });
};
