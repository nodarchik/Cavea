import { Sequelize, DataTypes, Model } from 'sequelize';

// Initialize the Sequelize instance with database connection configuration
const sequelize = new Sequelize('cavea', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define the Inventory model for the "Inventories" table.
class Inventory extends Model {}
// Initialize the Inventory model with its fields and configuration options
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
