const { client } = require('./init');

const postTweet = (text) => {
  const content = { status: text };
  client.post('statuses/update', content, (err, tweets, _) => {
    if (!err) console.log('tweet success');
    else console.log(err)
  });
};

module.exports = postTweet;