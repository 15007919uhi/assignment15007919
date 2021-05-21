const { getNameData, getQuestionName, getQuestion, getAnswers, getTitleColumn, getTitle, getVideo, getImage } = require('./index')
const pageName = 'balances';
const data = require('./data')
const nameTest = getNameData(pageName)
const questionTest = getQuestion(pageName)
const questionNameTest = getQuestionName(pageName)
const answersTest = getAnswers(pageName)
const titleColumnTest = getTitleColumn(pageName)
const titleTest = getTitle(pageName)
const videoTest = getVideo(pageName)
const imageTest = getImage(pageName)

test('Data exists for the question and is an object', () => {
    expect(nameTest).toBeDefined();
    expect(typeof(nameTest)).toBe('object');
})

test('Page name is something else', () => {
    expect(getQuestionName('a')).toBe('Question name is incorrect');
})

test('Page name is a number', () => {
    expect(getQuestionName(Number)).toBe('Question name is incorrect');
})

test('Page name is missing', () => {
    expect(getQuestionName(null)).toBe('Question name is missing');
})

test('Question text exists and is a string', () => {
    expect(questionTest).toBeDefined();
    expect(typeof(questionTest)).toBe('string');
})

test('An answers array exists and is an object', () => {
    expect(answersTest).toBeDefined();
    expect(typeof(answersTest)).toBe('object');
})

test('Answers have a correct key', () => {
    for (const index in answersTest) {
        expect(answersTest[index]).toHaveProperty('correct');
    }
});

test('Answer text exists', () => {
    for (const index in answersTest) {
        expect(answersTest[index]).toHaveProperty('text');
    }
});

test('Answers can be rendered on page correctly', () => {
    for (const index in answersTest) {
        expect(answersTest[index]).toHaveProperty('top', 'height', 'width', 'left', 'textpadding', 'center');
    }
});

test('Answers have right and wrong answers', () => {
    for (const index in answersTest) {
        expect(answersTest[index]).toHaveProperty('correct', true, false);
    }
});

test('Title column section exists and is an object', () => {
    expect(titleColumnTest).toBeDefined();
    expect(typeof(titleColumnTest)).toBe('object');
})

test('Three title columns are present', () => {
    expect(titleColumnTest.length).toBe(3);
});

test('Title columns should include Hints, General and Specific', () => {
    for (const index in titleColumnTest) {
        expect(titleColumnTest[index]).toHaveProperty('columnTitle', 'Hints', 'General', 'Specific to this problem')
        expect(titleColumnTest[index]).toHaveProperty('linkTitle', 'hints', 'general', 'specific')
    }
});

test('A video section exists and is an object', () => {
    expect(videoTest).toBeDefined();
    expect(typeof(videoTest)).toBe('object');
});

test('Video section should include image, link, title and type', () => {
    for (const index in videoTest) {
        expect(videoTest[index]).toHaveProperty('image', 'link', 'title', 'type')
    }
});

test('Video section includes links to general and specific videos', () => {
    for (const index in videoTest) {
        expect(videoTest[index]).toHaveProperty('link', 'general', 'specific')
    }
});

test('Title section exists and is an object', () => {
    expect(titleTest).toBeDefined();
    expect(typeof(titleTest)).toBe('object');
});

test('Image file is present and is a string', () => {
    expect(imageTest).toBeDefined();
    expect(typeof(imageTest)).toBe('string');
});

// test('Title section should contain an overall section', () => {
//     for (const index in titleTest) {
//         expect(titleTest[index]['overall']).toHaveProperty('overall')
//         expect(titleTest[index]['rowTitle']).toHaveProperty('Overall solution strategy')
//     }
// });

