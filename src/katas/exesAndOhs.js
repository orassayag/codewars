/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return
a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// Popular solution:
const communityXO = (str) => {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  };

// My solution:
const XO = (str) => {
    const array = str.toLowerCase().split('');
    const o = array.filter(t => t === 'o').length;
    const x = array.filter(t => t === 'x').length;
    return (!o && !x) ? true : o === x;
};

console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));
console.log(XO('zpzpzpp'));
console.log(XO('Oo'));

/*
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(XO('xo'),true);
  Test.assertEquals(XO("xxOo"),true);
  Test.assertEquals(XO("xxxm"),false);
  Test.assertEquals(XO("Oo"),false);
  Test.assertEquals(XO("ooom"),false);
    });
  });
*/