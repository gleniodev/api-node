module.exports = (sequelize, DataType) => {
    const Categoria = sequelize.define("Categoria",
        {
            id: {
                type: DataType.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            descricao: {
                type: DataType.STRING(100),
                allowNull: false
            },
            url_imagem: {
                type: DataType.STRING(500),
                allowNull: false,
                defaultValue: 'http://iraja.com.br/wp-content/uploads/2017/09/banner-placeholder.jpg'
            },
        },
        {
            tableName: "categoria",
            timestamps: false
        }
    );

    Categoria.associate = (models) => {
        Categoria.hasMany(models.Receita, {
            foreignkey: "id_categoria",
            as: "receitas"
        })
    }
    return Categoria;
}