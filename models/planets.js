module.exports = function(sequelize, DataTypes) {
  const Planet = sequelize.define("Planet", {
    planet_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    engineering_resources: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cooking_resources: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    financier_resources: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    travel1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    travel2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    travel3: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Planet.associate = models => {
    Planet.hasMany(models.Race);
    Planet.hasMany(models.Character);
  };
  return Planet;
};
