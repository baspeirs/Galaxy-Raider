module.exports = function(sequelize, DataTypes) {
    const Race = sequelize.define("Race", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        // associate: models => {
        //     Race.belongsTo(models.Planet, {foreignKey: "planetId"})
        // }
        planetId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Planets', // 'persons' refers to table name
                key: 'id' // 'id' refers to column name in persons table
            }
        }
    });
    // Race.associate = models => {
    //     Race.belongsTo(models.Planet, {as: "occupied_race", constraints: false})
    // }
    return Race;
};