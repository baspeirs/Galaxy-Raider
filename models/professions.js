module.exports = function(sequelize, DataTypes) {
    const Profession = sequelize.define("Profession", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
    });
    return Profession;
};