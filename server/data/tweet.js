import express from "express";
import "express-async-errors";

let tweets = [
  {
    id: "1",
    text: "드림코더분들 화이팅!",
    createdAt: Date.now().toString(),
    name: "Bella",
    username: "bella",
    url: "https://github.com/JiEun11/node",
  },
  {
    id: "2",
    text: "드림코딩 아카데미!",
    createdAt: Date.now().toString(),
    name: "Ellie",
    username: "ellie",
  },
];

export function getAllTweets() {
  return tweets;
}

export function getAllTweetsByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export function getAllTweetsById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export function createTweet(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
}

export function updateTweet(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function deleteTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
