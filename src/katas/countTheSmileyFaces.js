/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array).
Order of the face (eyes, nose, mouth) elements will always be the same.
*/

// Popular solution:
function communityCountSmileys(arr) {

}

// My solution:
const countSmileys = (arr) => {
    return arr.reduce((acc, item) => {
        acc += (item[0] === ':' || item[0] === ';') && (item.length === 3 ? (item[1] === '-' || item[1] === '~') : true) && (item.lastIndexOf(')') > -1 || item.lastIndexOf('D') > -1) ? 1 : 0;
        return acc;
    }, 0);
};

console.log(countSmileys([]));
console.log(countSmileys([':D', ':~)', ';~D', ':)']));
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
console.log(countSmileys([';)' , ';oD' , ';)' , ';(' , ':)' , ':D' , ';)']));
/*
describe("Basic testing", function() {
    it("", () => {
      Test.assertEquals(countSmileys([]), 0);
      Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
      Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
      Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
    });
  });
  */