import express from "express";
import cors from "cors";
import type { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env.js";
const app = express();

//security
app.use(helmet());
app.use(express.json());
app.use(cors());

if (env.NODE_ENV === "development") {
  app.use(morgan("dev"));

  app.use((req: Request, _res: Response, next: NextFunction) => {
    console.log("📍 URL:", req.method, req.originalUrl);
    console.log("📦 Body:", req.body);
    next();
  });
} else {
  app.use(morgan("combined"));
}
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
