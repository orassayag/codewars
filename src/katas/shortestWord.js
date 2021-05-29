/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

// Popular solution:
const communityFindShort = (s) => {
    return Math.min.apply(null, s.split(' ').map(w => w.length));
};

// My solution:
const findShort = (s) => {
    return Math.min(...s.split(' ').map(t => t.length));
};

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
console.log(findShort('turns out random test cases are easier than writing out basic ones'));
console.log(findShort('Let\'s travel abroad shall we'));

/* describe("Example tests", () => {
    Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
    Test.assertEquals(findShort("Let's travel abroad shall we"), 2);
}); */