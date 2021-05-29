/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

// Popular solution:
const communityList = (names) => {
    const xs = names.map(p => p.name);
    const x = xs.pop();
    return xs.length ? xs.join(', ') + ' & ' + x : x || '';
};

// My solution:
const list = (names) => {
    if (!names) { return ''; }
    const namesJoin = names.map(t => t.name).join(', ');
    const i = namesJoin.lastIndexOf(', ');
    return namesJoin.slice(0, i) + namesJoin.slice(i).replace(', ', ' & ');
};

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]));
console.log(list());
console.log(list([{ name: 'Bart' }]));

/* describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
  "Must work with many names")
  Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
  "Must work with many names")
  Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa',
  "Must work with two names")
  Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
  Test.assertEquals(list([]), '', "Must work with no names")
    });
  }); */