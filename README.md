# WAD Assignment 1

In order to run the tests:
```
npm run test
```
## Tests
I chose to test all the main elements of the data found under the "balances" header, starting with an overall test to see if data exists for the provided page name (which would be defined based on the URL on a working version of the site).

Following this, tests were carried out to make sure the question name matched the name given in the URL, if it was missing or in an invalid format. Text for the question itself was tested to ensure it is a defined string.

Basic tests on presence and type were used for the answers array, followed by testing for keys for 'correct' and 'text', to ensure each answer had text that could be displayed on screen and a true/false boolean to denote which answer(s) were correct. Visual aspects of the answers were also tested.

I created a basic function to test potential answers inputted by a user assuming that each answer button would be matched with a numerical ID, and tested for true/false values on the 'correct' field for each answer number. I used this same function with output text to the user in place of the true/false values to demonstrate what would be shown on-screen following an answer attempt, and tested it similarly. A more extensive form of these functions and tests would need to be created in order to be able to use this with multiple questions, as it relies on preexisting knowledge of the correct and incorrect answers for this specific question.

More basic tests were carried out on the title colummns where buttons would be displayed, checking for an array length of 3 to match the 3 columns found on each question for the i-want-to-study-engineering website, and ensuring each column has the correct text. The existence of a title section to display on the page was also tested.

Similarly, the video section was tested for standard values, including an image, text, title and type, as well as checking that these were grouped by 'general' and 'specific' types. The final test checks for the presence of an image value that contains a string, although modification of this may be needed if questions without an image are used across the site.

## Evaluation

I selected these areas to test as they seemed the most integral to the formation of the page and could cause problems to users if not displayed correctly or at all - both visually and functionally. There is room for improvement in order to create an extensive series of tests, particularly for the answer functionality, however I feel satisfied with these as basic tests for the site, and found this exercise useful in understanding test driven development.
