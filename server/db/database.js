import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "dwitter",
  password: "1234",
});

export const db = pool.promise();
