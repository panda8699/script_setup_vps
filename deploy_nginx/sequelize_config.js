
require('dotenv').config(); // this is important!


module.exports = {
"development": {
    "username": process.env.DB_USERNAME_DEV,
    "password": process.env.DB_PASSWORD_DEV,
    "database": process.env.DB_DATABASE_DEV,
    "host": process.env.DB_HOST_DEV,
    "port":process.env.DB_PORT_DEV,
    "dialect": "mysql",
    "logging": false,
    "timezone": "+07:00"
},
"test": {
    "username": process.env.DB_USERNAME_DEV,
    "password": process.env.DB_PASSWORD_DEV,
    "database": process.env.DB_DATABASE_DEV,
    "host": process.env.DB_HOST_DEV,
    "port":process.env.DB_PORT_DEV,
    "dialect": "mysql",
    "logging": false,
    "timezone": "+07:00"
},
"production": {
   "username": process.env.DB_USERNAME_PRO,
   "password": process.env.DB_PASSWORD_PRO,
   "database": process.env.DB_DATABASE_PRO,
   "host": process.env.DB_HOST_PRO,
   "port":process.env.DB_PORT_PRO,
   "dialect": "mysql",
   "logging": false,
   "timezone": "+07:00"
}
};