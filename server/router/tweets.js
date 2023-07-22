import express from "express";
import "express-async-errors";
import { db } from "../db/database.js";

const SELECT_JOIN =
  "SELECT tw.id, tw.text, tw.createdAt, tw.userId, us.username, us.name, us.url FROM tweets as tw JOIN users us ON tw.userId = us.id";
const ORDER_DESC = "ORDER BY tw.createdAt DESC";

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get("/", async (req, res, next) => {
  const username = req.query.username;
  if (username) {
    return db
      .execute(`${SELECT_JOIN} WHERE username=? ${ORDER_DESC}`, [username])
      .then((result) => res.status(200).json(result[0]));
  } else {
    return db
      .execute(`${SELECT_JOIN} ${ORDER_DESC}`)
      .then((result) => res.status(200).json(result[0]));
  }
});

// GET /tweets/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  return db
    .execute(`${SELECT_JOIN} WHERE tw.id=?`, [id])
    .then((result) => res.status(200).json(result[0][0]));
});

// POST /tweets
router.post("/", (req, res, next) => {
  const { text, name, userId } = req.body;
  return db
    .execute("INSERT INTO tweets (text, createdAt, userId) VALUES(?,?,?)", [
      text,
      new Date(),
      userId,
    ])
    .then((result) => res.status(201).json(result));
});

// PUT /tweets/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  return db
    .execute("UPDATE tweets SET text=? WHERE id=?", [text, id])
    .then((result) => res.status(200).json(result));
});

// DELETE /tweets/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  return db
    .execute("DELETE FROM tweets WHERE id=?", [id])
    .then((result) => res.sendStatus(204));
});
export default router;
