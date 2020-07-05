module.exports = function(sequelize, DataTypes) {
  const Character = sequelize.define("Character", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 30]
      }
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
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
    },
    planetId: {
      type: DataTypes.INTEGER,
            references: {
                model: 'Planets', // 'Planets' refers to table name
                key: 'id' // 'id' refers to column name in persons table
            }
    },
    raceId: {
      type: DataTypes.INTEGER,
            references: {
                model: 'Races',
                key: 'id'
            }
    },
    ageId: {
      type: DataTypes.INTEGER,
            references: {
                model: 'Ages',
                key: 'id'
            }
    },
    professionId: {
      type: DataTypes.INTEGER,
            references: {
                model: 'Professions',
                key: 'id'
            }
    }
  });
  return Character;
};
