import express from "express";
import cors from "cors";
import morgan from "morgan"; // debugging
import helmet from "helmet"; // 보안
import "express-async-errors";
import tweetRouter from "./router/tweets.js";
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/tweets", tweetRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);
