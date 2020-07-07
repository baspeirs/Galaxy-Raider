module.exports = function(sequelize, DataTypes) {
    const Profession = sequelize.define("Profession", {
        profession: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
    });
    Profession.associate = models => {
        Profession.belongsTo(models.Character)
        // == try this later
        Profession.belongsTo(models.Race)
        Profession.belongsTo(models.Age)
    }
    return Profession;
};