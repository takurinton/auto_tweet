const { client, SCREEN_NAME } = require('./init');

const params = { screen_name: SCREEN_NAME };

const callBackTweet = (err, tweets, _, text) => {
  if (!err) {
    tweets.map(tweet => text+=tweet.text);
  };
  return text;
};

const getTweet = async () => {
  const res = await client.get('statuses/user_timeline', params);
  const text = res.map(tweet => tweet.text).join('')
  return text;
};

module.exports = getTweet;
