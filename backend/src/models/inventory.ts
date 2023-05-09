import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('cavea', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

class Inventory extends Model {}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Inventory',
    timestamps: true,
  }
);

export { Inventory };
