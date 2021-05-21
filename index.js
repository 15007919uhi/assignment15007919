const data = require('./data')

const pageName = 'balances';

function getNameData(name) {
    return data[name];
}

//Gets full question data using question name/URL and checks for missing or incorrect values 
function getQuestionName(name) {
    if (!name) {
        console.log('404 - Please return to question selection page')
        return ('Question name is missing')
    }
    if (name != pageName) {
        console.log('URL does not match question data, contact an administrator if the error persists')
        return ('Question name is incorrect')
    }
    if (name && typeof (name) === 'string') {
        return data[name]
    }
}

//Gets question text data and checks for a missing value or incorrect response type
function getQuestion(name) {
    const question = data[name].questions.fullquestion.question;
    if (question && typeof (question) === 'string') {
        return question;
    }
    if (!question) {
        console.log('Question text missing, contact an administrator if the error persists')
        return ('Question text is missing')
    }
    if (question && typeof (question) != 'string') {
        console.log('Invalid question text')
        return ('Question text is invalid')
    }
}

//Gets answers and checks they are in an array
function getAnswers(name) {
    const answers = data[name].questions.fullquestion.answer;
    if (Array.isArray) {
        return answers;
    }
    if (!Array.isArray) {
        console.log('Problem with getting data for this question, contact an administrator if the error persists')
        return ('Invalid array');
    }
}

//Gets relevant title columns to display on page
function getTitleColumn(name) {
    const titleColumn = data[name].hint.titleColumn;
        return titleColumn;
}

//Gets data for the hint video section of the page, checking if an object is returned or if the video array is missing
function getVideo(name) {
    const video = data[name].hint.video;
        if (video && typeof (video) === 'object') {
            return video;
        }
        if (video && typeof (video) != 'object') {
            console.log('Problem getting video data, contact an administrator')
            return ('Invalid data for video')
        }
        if (!video) {
            console.log('Video data missing')
            return ('Video data not found')
        }
}

//Gets the images for each member of the video array, checks that the filetypes are given as strings or if a video doesn't exist for the question
function getImage(name) {
    const image = data[name].hint.video.image;
        if (image && typeof (image) === 'string') {
            return image
        }
        if (image && typeof (image) != 'string') {
            console.log('Invalid image type')
            return ('Invalid image');
        }
        if (!image) {
            console.log('No image was found for this question')
            return ('Image not found');
        }
}

//Gets data for the title section of the page
function getTitle(name) {
    const title = data[name].hint.title;
        if (title && typeof (title) === 'object') {
            return title;
        }
        if (title && typeof (title) != 'object') {
            console.log('Title data missing, contact an administrator if this problem persists')
            return ('Title data not found');
        }
        if (!title) {
            console.log('Title data not found for this question')
            return ('Title data not found');
        }
}

module.exports = { getQuestionName, getQuestion, getAnswers, getTitleColumn, getTitle, getVideo, getNameData, getImage }