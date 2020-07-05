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
    return Profession;
};