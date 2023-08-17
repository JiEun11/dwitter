import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweets.js";
import { db } from "../db/database.js";

const SELECT_JOIN =
  "SELECT tw.id, tw.text, tw.createdAt, tw.userId, us.username, us.name, us.url FROM tweets as tw JOIN users us ON tw.userId = us.id";
const ORDER_DESC = "ORDER BY tw.createdAt DESC";

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username'
router.get("/", tweetController.getTweets);

// GET /tweets/:id
router.get("/:id", tweetController.getTweet);

// POST /tweets
router.post("/", tweetController.createTweet);

// PUT /tweets/:id
router.put("/:id", tweetController.updateTweet);

// DELETE /tweets/:id
router.delete("/:id", tweetController.deleteTweet);

export default router;
