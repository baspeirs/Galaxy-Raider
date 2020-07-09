module.exports = function(sequelize, DataTypes) {
  const Character = sequelize.define("Character", {
    char_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 30]
      }
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Character.associate = models => {
    Character.belongsTo(models.Race);
    Character.belongsTo(models.Profession);
    Character.belongsTo(models.Age);
    Character.belongsTo(models.Planet, {
      foriegnKey: "PlanetId",
      as: "Planet"
    });
  };
  return Character;
};
