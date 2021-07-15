const createSentence = require('./createSentence');
const getTweet = require('./getTweet');
const postTweet = require('./postTweet');

const main = async () => {
    const sentence = await getTweet();
    const text = createSentence(sentence);
    console.log(text)
    console.log(text.length)
    postTweet(text);
};

main();