// const { DataTypes, Sequelize } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('pokemon', {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: Sequelize.UUIDV4,

const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};

