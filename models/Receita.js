
module.exports = (sequelize, DataType) => {
    const Receita = sequelize.define("Receita", {
        id: {
            type: DataType.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        titulo: {
            type: DataType.STRING(100),
            allowNull: false
        },
        tempo_preparo: {
            type: DataType.INTEGER.UNSIGNED,
            allowNull: false
        },
        rendimento: {
            type: DataType.INTEGER.UNSIGNED,
            allowNull: false
        },
        ingredientes: {
            type: DataType.TEXT,
            allowNull: false
        },
        modo_preparo: {
            type: DataType.TEXT,
            allowNull: false
        },
        observacoes: {
            type: DataType.STRING(200),
            allowNull: true,
            defaultValue: null
        },
        url_imagem: {
            type: DataType.STRING(500),
            allowNull: true,
            defaultValue: 'http://iraja.com.br/wp-content/uploads/2017/09/banner-placeholder.jpg'
        },
        UsuarioId: {
            type: DataType.INTEGER.UNSIGNED,
            allowNull: false,
            field: "id_usuario"
        },
        CategoriumId: {
            type: DataType.INTEGER.UNSIGNED,
            allowNull: false,
            field: "id_categoria"
        },
        data: {
            type: DataType.DATE,
            allowNull: true
        },
        url_video: {
            type: DataType.TEXT,
            allowNull: true,
            defaultValue: null
        }
    },
        {
            tableName: "receita",
            sequelize,
            timestamps: false
        }
    );

    Receita.associate = (models) => {
        Receita.belongsTo(models.Usuario, {
            foreignKey: "id_usuario",
            as: "usuario"
        }),
            Receita.belongsTo(models.Categoria, {
                foreignKey: "id_categoria",
                as: "categoria"
            })
    }

    return Receita;
}