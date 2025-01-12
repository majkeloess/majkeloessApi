import express, { Request, Response } from "express";
import { client } from "./database/index";
import moviesRouter from "./routes/moviesRouter";
import cors from "cors";
import { apiKeyMiddleware } from "./middlewares/apiKeyMiddleware";
import techMilionerzyRouter from "./routes/techmilionerzyRouter";
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

async function initializeDatabase() {
  try {
    await client.connect();
    console.log("DB connected!");
  } catch (error) {
    console.error("DB connection error:", error);
  }
}

initializeDatabase();

app.use("/techmilionerzy", apiKeyMiddleware, techMilionerzyRouter);
app.use("/matchflix/movies", apiKeyMiddleware, moviesRouter);

app.get("/", apiKeyMiddleware, (req: Request, res: Response) => {
  res.status(404).json({ error: "Not found!" });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
