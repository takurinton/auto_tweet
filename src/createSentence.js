const TinySegmenter = require('tiny-segmenter');
const segmenter = new TinySegmenter();

const START = '__START__';
const END   = '__END__';

const arrangeText = (text) => {
    text = text.replace(/\n/g, '。');
    text = text.replace(/[\?\!？！]/g, '。');
    text = text.replace(/[-|｜:：・]/g, '。');
    text = text.replace(/[「」（）\(\)\[\]【】]/g, ' ');
    text = text.replace(/@.*? /g, '');

    return text;
};

const makeDict = (text) => {
    const sentences = text.split('。');
    const morpheme = {};
    for(var i = 0; i < sentences.length; i++) {
        let tokenized = segmenter.segment(sentences[i]);
        if (!morpheme[START]) morpheme[START] = [];
        if (tokenized[0]) morpheme[START].push(tokenized[0]);
        for (var w = 0; w < tokenized.length; w++) {
            const now = tokenized[w];
            const next = tokenized[w+1] ?? END; 
            
            if (!morpheme[now]) morpheme[now] = [];

            morpheme[now].push(next);

            if (now === '、') morpheme[START].push(next);
        };
    };
    return morpheme;
};

const makeSentence = (dict) => {
    let now = '';
    let result = '';
    now = dict[START][Math.floor(Math.random() * dict[START].length)];
    result += now;
    while (now !== END) {
        now = dict[now][Math.floor(Math.random() * dict[now].length)];
        result += now;
    };
    result = result.replace(END, '。')
    return result;
};

const createSentence = (text) => {
    let res = '';
    for (var i = 0; i < 3; i++) {
        const _text = arrangeText(text);
        const dict = makeDict(_text);
        const sentence = makeSentence(dict);
        res += sentence;
    }
    return res;
};

module.exports = createSentence;