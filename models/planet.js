module.exports = function(sequelize, DataTypes) {
    const Planet = sequelize.define("Planet", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        occupied_race: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        hostile_race: {
            type: DataTypes.STRING
        },
        engineering_resources: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cooking_resources: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        financier_resources: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Planet;
};