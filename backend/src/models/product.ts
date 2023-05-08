import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('cavea', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

class Product extends Model {}

Product.init(
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
    modelName: 'Product',
    timestamps: true,
  }
);

export { Product };
