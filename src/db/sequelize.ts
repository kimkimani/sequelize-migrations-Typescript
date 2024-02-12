import { Sequelize } from 'sequelize';

let connection: Sequelize = new Sequelize("shop", 'postgres', 'pass', {
  host: "localhost",
  dialect: 'postgres', 
});

export default connection;
