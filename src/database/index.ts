import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Client } = pg;

export const client = new Client({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOSTNAME,
  port: 5432,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
});
