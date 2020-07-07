module.exports = function(sequelize, DataTypes) {
    const Race = sequelize.define("Race", {
        race: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
    });
    Race.associate = models => {
        Race.belongsTo(models.Planet, {foreignKey: "PlanetId", as: "Planet", allowNull: false})
        Race.belongsTo(models.Planet, {foreignKey: "HostileId", as: "Hostile"})
        Race.hasMany(models.Character)
        // == setting these so we can grab them off of the races result to send to handlebars later
        Race.hasMany(models.Age)
        Race.hasMany(models.Profession)
    }
    return Race;
};