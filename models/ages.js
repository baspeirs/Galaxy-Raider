module.exports = function(sequelize, DataTypes) {
    const Age = sequelize.define("Age", {
        age: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
    });
    Age.associate = models => {
        Age.belongsTo(models.Character)
    }
    return Age;
};