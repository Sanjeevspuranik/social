import mysql from "mysql2";
import "dotenv";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sanjeev$88",
  database: "social",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("coonction to MySQL is successfull");
  }
});
