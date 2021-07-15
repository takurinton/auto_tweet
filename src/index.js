const createSentence = require('./createSentence');
const getTweet = require('./getTweet');
const postTweet = require('./postTweet');

const main = async () => {
    const sentence = await getTweet();
    const text = createSentence(sentence);
    postTweet(text);
    console.log('tweet text: ', text)
    console.log('tweet length: ', text.length)
};

main();