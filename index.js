import express from "express";
import generativeRouter from "./routes/generative.routes.js";
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config({
    path: './.env'
});

app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
}));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.use("/api", generativeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
