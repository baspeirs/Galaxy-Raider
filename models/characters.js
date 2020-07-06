module.exports = function(sequelize, DataTypes) {
  const Character = sequelize.define("Character", {
    char_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 30]
      }
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Character.associate = models => {
    Character.belongsTo(models.Race)
    Character.hasOne(models.Profession)
    Character.hasOne(models.Age)
}
  return Character;
};
