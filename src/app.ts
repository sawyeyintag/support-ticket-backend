import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

const app = express();

// app.use(cors());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.get("", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// app.listen(3000, () => console.log("Server running on port 3000"));

export default app;
