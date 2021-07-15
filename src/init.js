const Twitter = require('twitter');

const SCREEN_NAME = process.env.SCREEN_NAME;
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.TOKEN,
  access_token_secret: process.env.TOKEN_SECRET,
});

module.exports = {
  client: client, 
  SCREEN_NAME: SCREEN_NAME,
}