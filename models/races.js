module.exports = function(sequelize, DataTypes) {
    const Race = sequelize.define("Race", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        }
    });
    return Planet;
};