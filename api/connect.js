import mysql from "mysql";

export const db = mysql.createPool({
    connectionLimit: 10,
    host:"localhost",
    user:"root",
    password:"@Gd880818",
    database:"social-app"
})