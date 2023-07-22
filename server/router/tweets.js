import express from "express";
import "express-async-errors";

let tweets = [
  {
    id: "1",
    text: "드림코더 화이팅",
    createdAt: Date.now().toString(),
    name: "Bella",
    username: "bella",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    text: "Hi Hi",
    createdAt: Date.now().toString(),
    name: "Ellie",
    username: "ellie",
  },
];

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username

router.get("/", (req, res, next) => {
  // 기본적으로 /tweets으로 연결되어 있으므로 그냥 /만
  const username = req.query.username;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
});

// GET /tweets/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found!!` });
  }
});

// POST /tweets
router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

// PUT /tweets/:id
// DELETE /tweets/:id
export default router;
