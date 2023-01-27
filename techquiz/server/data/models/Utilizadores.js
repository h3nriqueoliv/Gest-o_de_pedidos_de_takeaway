const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/database");

const UtilizadoreModel = database.define(
  "Utilizadore" /*isto é o nome da tabela da base de dados*/,
  {
    id_utilizador: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      required: true,
      primaryKey: true,
    },

    nome: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      required: true,
      lowercase: true,
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
      select: false,
      required: true,
    },
    
<<<<<<< HEAD
    
=======
    id_tipoutilizador: {
      type: Sequelize.INTEGER,
      allowNull: false,
      select: false,
      required: true,
      foreignKey: true,
    },

    id_tipoutilizador: {
      type: Sequelize.INTEGER,
      default: 0,
    },
>>>>>>> cd228568be0d00214053245caa0c784113444791
  }
  
);

module.exports = UtilizadoreModel;

