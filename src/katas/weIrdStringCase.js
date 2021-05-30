/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and
returns the same string with all even indexed characters in each word upper
cased, and all odd indexed characters in each word lower cased. The indexing
just explained is zero based, so the zero-ith index is even, therefore that
character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' ').
Spaces will only be present if there are multiple words. Words will be separated
by a single space(' ').
*/

// Popular solution:
const communityToWeirdCase = (string) => {
    return string.split(' ').map((word) => {
        return word.split('').map((letter, index) => {
            return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
        }).join('');
    }).join(' ');
};

// My solution:
const toWeirdCase = (string) => {
    return string.split(' ').map(item => (item.split('').reduce((acc1, item1, i) => {
        acc1.push((i % 2 === 0 ? item[i].toUpperCase() : item[i].toLowerCase()));
        return acc1;
    }, []).join(''))).join(' ');
};

console.log(toWeirdCase('This'));
console.log(toWeirdCase('This is a test'));


/*   describe('toWeirdCase', function(){
    it('should return the correct value for a single word', function(){
      Test.assertEquals(toWeirdCase('This'), 'ThIs');
      Test.assertEquals(toWeirdCase('is'), 'Is');
    });
    it('should return the correct value for multiple words', function(){
      Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
    });
  }); */