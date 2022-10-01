const { Sequelize } = require('sequelize');
const env = require('dotenv');

env.config()

const db = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USER,
        process.env.DATABASE_PASS, {
                host: "localhost",
                dialect: "mysql"
        }
)

function ConnectionDB() {
        db.authenticate().then(() => {
                console.log("DB: Connection successfully");
        }).catch((err) => {
                console.log("DB: Connection failed, " + err)
                
        })
}

module.exports = {
        db: db,
        ConnectionDB: ConnectionDB()
}