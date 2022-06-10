import express, { Express, Request, Response } from "express";

export const router = express.Router();

// Find all customers
router.get("/", (req: Request, res: Response) => {
  res.send("Find all users");
});
