const createSentence = require('./createSentence');
const getTweet = require('./getTweet');
const postTweet = require('./postTweet');

const tweet = async () => {
    const sentence = await getTweet();
    text = createSentence(sentence);
    console.log(`text content: ${text}`);
    console.log(`text length: ${text.length}, recharenge!!!`);
    console.log(``);
    if (text.length === 0 || text.length > 140) {
        console.log('tweet length is 140 over. restart programm.')
        tweet();
    } else {
        postTweet(text);
    };
}

const main = async () => {
    tweet();
};

main();