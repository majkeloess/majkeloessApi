import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 2137;

app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript Express init");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
