import express, { Request, Response } from "express";
import { client } from "./database/index";
import recRouter from "./routes/recommendationsRoutes";
import cors from "cors";
import { apiKeyMiddleware } from "./middlewares/apiKeyMiddleware";

const port = 2137;
const app = express();

app.use(cors());

async function startServer() {
  try {
    await client.connect();
    console.log("DB connected!");
  } catch (error) {
    console.error(error);
  }

  app.use("/recommendations", apiKeyMiddleware, recRouter);

  app.get("/", apiKeyMiddleware, (req: Request, res: Response) => {
    res.status(404).json({ error: "Not found!" });
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.error(error);
});
