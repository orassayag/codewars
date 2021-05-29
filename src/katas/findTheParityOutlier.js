/*
You are given an array (which will have a length of at least 3, but could be very large)
containing integers. The array is either entirely comprised of odd integers or entirely
comprised of even integers except for a single integer N. Write a method that takes the
array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

// Popular solution:
const communityFindOutlier = (integers) => {
    const even = integers.filter(a => a % 2 == 0);
    const odd = integers.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
};

// My solution:
const findOutlier = (integers) => {
    const odd = integers.filter(t => Math.abs(t) % 2 > 0);
    const even = integers.filter(t => Math.abs(t) % 2 === 0);
    return odd.length === 1 ? odd[0] : even[0];
};

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
console.log(findOutlier([-61839004, -107907275, -37339472, -153383496, 15558522]));

/* describe("Tests", () => {
    it("test", () => {
      Test.assertEquals(findOutlier([0, 1, 2]), 1)
      Test.assertEquals(findOutlier([1, 2, 3]), 2)
      Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
      Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
      Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
    });
  });
   */