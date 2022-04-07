module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define("Usuario",
    {
      id: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataType.STRING(100),
        allowNull: false
      },
      senha: {
        type: DataType.TEXT,
        allowNull: false
      },
      nome: {
        type: DataType.STRING(150),
        allowNull: false
      }
    },
    {
      tableName: "usuario",
      timestamps: false
    }
  )
  Usuario.associate = (models) => {
    Usuario.hasMany(models.Receita, {
      foreignkey: "id_usuario",
      as: "receitas"
    })
  }


  return Usuario;
};
