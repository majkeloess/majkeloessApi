import express, { Request, Response } from "express";
import { client } from "./database/index";
import recRouter from "./routes/recommendationsRoutes";
import cors from "cors";
import { apiKeyMiddleware } from "./middlewares/apiKeyMiddleware";
import cron from "node-cron";

const app = express();
app.use(cors());

async function initializeDatabase() {
  try {
    await client.connect();
    console.log("DB connected!");
  } catch (error) {
    console.error("DB connection error:", error);
  }
}

initializeDatabase();

cron.schedule("0 * * * *", async () => {
  try {
    await client.query("SELECT 1");
    console.log("Keep-alive query executed");
  } catch (error) {
    console.error("Keep-alive query failed", error);
  }
});

app.use("/matchflix/recommendations", apiKeyMiddleware, recRouter);

app.get("/", apiKeyMiddleware, (req: Request, res: Response) => {
  res.status(404).json({ error: "Not found!" });
});

export default app;
