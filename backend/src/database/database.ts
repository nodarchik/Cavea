import { Sequelize } from 'sequelize';
import path from 'path';

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '../config/config.json'))[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false,
});

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error: any) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;
