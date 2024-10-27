import { Request, Response, NextFunction } from "express";

export const apiKeyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.query.key;

  if (apiKey && apiKey == process.env.API_KEY) {
    next();
  } else {
    res.status(401).json({ error: "Not authorized!" });
  }
};
