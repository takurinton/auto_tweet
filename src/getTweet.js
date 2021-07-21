const { client, SCREEN_NAME } = require('./init');

const params = { screen_name: SCREEN_NAME };
const getTweet = async () => {
    try {
        const res = await client.get('statuses/user_timeline', params);
        const text = res.map(tweet => tweet.text).join('')
        return text;
    } catch(err) {
        console.err(err);
    }
};

module.exports = getTweet;
