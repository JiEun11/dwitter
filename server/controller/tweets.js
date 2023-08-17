import * as tweetRepository from "../data/tweet.js";

export function getTweets(req, res, next) {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll();
  res.status(200).json(data);
  // if (username) {
  //   return db
  //     .execute(`${SELECT_JOIN} WHERE username=? ${ORDER_DESC}`, [username])
  //     .then((result) => res.status(200).json(result[0]));
  // } else {
  //   return db
  //     .execute(`${SELECT_JOIN} ${ORDER_DESC}`)
  //     .then((result) => res.status(200).json(result[0]));
  // }
}

export function getTweet(req, res, next) {
  const id = req.params.id;
  const tweet = tweetRepository.getAllById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) doesn't exist!!` });
  }
  // return db
  //   .execute(`${SELECT_JOIN} WHERE tw.id=?`, [id])
  //   .then((result) => res.status(200).json(result[0][0]));
}

export function createTweet(req, res, next) {
  const { text, name, username } = req.body;
  const tweet = tweetRepository.create(text, name, username);
  res.status(201).json(tweet);
  // return db
  //   .execute("INSERT INTO tweets (text, createdAt, userId) VALUES(?,?,?)", [
  //     text,
  //     new Date(),
  //     userId,
  //   ])
  //   .then((result) => res.status(201).json(result));
}

export function updateTweet(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweetRepository.update(id, text);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) is not found!!!` });
  }
  // return db
  //   .execute("UPDATE tweets SET text=? WHERE id=?", [text, id])
  //   .then((result) => res.status(200).json(result));
}

export function deleteTweet(req, res, next) {
  const id = req.params.id;
  tweetRepository.remove(id);
  res.sendStatus(204);
  // return db
  //   .execute("DELETE FROM tweets WHERE id=?", [id])
  //   .then((result) => res.sendStatus(204));
}
