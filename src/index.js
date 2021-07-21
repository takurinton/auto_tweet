const createSentence = require('./createSentence');
const getTweet = require('./getTweet');
const postTweet = require('./postTweet');

const tweet = async () => {
    const sentence = await getTweet();
    text = createSentence(sentence);
    console.log(`text content: ${text}`);
    console.log(`text length: ${text.length}`);
    if (text.length === 0 || text.length > 140) {
        console.log('tweet length is 140 over.');
        console.log('restart programm.');
        console.log('');
        tweet();
    } else {
        postTweet(text);
    };
}

const main = async () => {
    tweet();
};

main();