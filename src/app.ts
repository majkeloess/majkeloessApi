import express, { Request, Response } from "express";

const port = process.env.PORT || 2137;
const app = express();

app.use("/recommendations");

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Wrong request!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
