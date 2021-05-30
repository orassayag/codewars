/*
Write a function named first_non_repeating_letter that takes a string input,
and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't',
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character,
but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty
string ("") or None -- see sample tests.
*/

// Popular solution:
const communityFirstNonRepeatingLetter = (s) => {
    for (var i in s) {
        if (s.match(new RegExp(s[i], 'gi')).length === 1) {
            return s[i];
        }
    }
    return '';
};

// My solution:
const firstNonRepeatingLetter = (s) => {
    s = s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '');
    return s.split('').reduce((acc, item) => {
        const regExp = new RegExp(item, 'gi');
        if ((s.match(regExp) || []).length === 1) {
            acc.push(item);
        }
        return acc;
    }, [])[0] || '';
};

console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('moonmen'));
console.log(firstNonRepeatingLetter('n?nrr'));

/* describe('Simple Tests', function() {
    it('should handle simple tests', function() {
      Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
      Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
      Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
    });
  }); */