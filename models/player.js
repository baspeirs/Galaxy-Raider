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
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [2]
          }
      },
      engineering_recources: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      occupied_race: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      financier_recource: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
  });
  return Planet;
};
