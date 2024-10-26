import express, { Request, Response } from "express";
import { client } from "./database/index";
const port = 2137;
const app = express();

async function startServer() {
  try {
    await client.connect();
    console.log("DB connected!");
  } catch (error) {
    console.error(error);
  }

  //app.use("/recommendations");

  app.get("/", (req: Request, res: Response) => {
    res.sendStatus(404);
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.log(error);
});
