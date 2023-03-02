import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import timeRoutes from "./routes/timeRoute";

const app: Express = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// routes
app.use("/api/v1/time", timeRoutes)

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(`${process.cwd()}/views`, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
