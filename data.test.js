const { getQuestionName, getQuestion, getAnswers, getTitleColumn, getTitle, getVideo, getImage, checkAnswer, checkResult } = require('./index')
const pageName = 'balances';
const nameTest = getQuestionName(pageName)
const questionTest = getQuestion(pageName)
const answersTest = getAnswers(pageName)
const titleColumnTest = getTitleColumn(pageName)
const titleTest = getTitle(pageName)
const videoTest = getVideo(pageName)
const imageTest = getImage(pageName)

//Tests for overall data used to create the page
test('Data exists for the question and is an object', () => {
    expect(nameTest).toBeDefined();
    expect(typeof(nameTest)).toBe('object');
})

//Tests that the question name/URL is valid
test('Page name is something else', () => {
    expect(getQuestionName('a')).toBe('Question name is incorrect');
})

test('Page name is a number', () => {
    expect(getQuestionName(Number)).toBe('Question name is incorrect');
})

test('Page name is missing', () => {
    expect(getQuestionName(null)).toBe('Question name is missing');
})

//Tests that a question is present
test('Question text exists and is a string', () => {
    expect(questionTest).toBeDefined();
    expect(typeof(questionTest)).toBe('string');
})

//Testss properties of the answers array 
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

//Tests answer functions and responses that would be shown to the user
test('Numbers corresponsing to the relevant radio button IDs return correct and incorrect answers', () => {
    expect(checkAnswer('4', answersTest)).toBe(false);
    expect(checkAnswer('3', answersTest)).toBe(true);
    expect(checkAnswer('2', answersTest)).toBe(false);
    expect(checkAnswer('1', answersTest)).toBe(false);
});

test('Answer cannot be null', () => {
    expect(checkAnswer(null, answersTest)).toBe('Invalid answer');
});

test('Invalid answer type returns an error message to the user', ()=> {
    expect(checkResult(null, answersTest)).toBe('Invalid answer, try again or contact an administrator');
    expect(checkResult(Number, answersTest)).toBe('Invalid answer, try again or contact an administrator');
});

test('Correct and incorrect answers return relevant feedback to user', () => {
    expect(checkResult('3', answersTest)).toBe('Your answer is correct');
    expect(checkResult('2', answersTest)).toBe('Your answer is incorrect, try again');
});

//Tests for working title columns
test('Title column section exists and is an object', () => {
    expect(titleColumnTest).toBeDefined();
    expect(typeof(titleColumnTest)).toBe('object');
});

test('Three title columns are present', () => {
    expect(titleColumnTest.length).toBe(3);
});

test('Title columns should include Hints, General and Specific', () => {
    for (const index in titleColumnTest) {
        expect(titleColumnTest[index]).toHaveProperty('columnTitle', 'Hints', 'General', 'Specific to this problem')
        expect(titleColumnTest[index]).toHaveProperty('linkTitle', 'hints', 'general', 'specific')
    }
});

//Tests the video section works and displays the relevant objects
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

//Tests title section works
test('Title section exists and is an object', () => {
    expect(titleTest).toBeDefined();
    expect(typeof(titleTest)).toBe('object');
});

//Tests if an image is needed to render the page and can be displayed
test('Image file is present and is a string', () => {
    expect(imageTest).toBeDefined();
    expect(typeof(imageTest)).toBe('string');
});