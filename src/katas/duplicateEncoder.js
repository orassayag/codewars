/*
The goal of this exercise is to convert a string to a new string where each character in the new
string is "(" if that character appears only once in the original string, or ")" if that
character appears more than once in the original string. Ignore capitalization when
determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
Notes

Assertion messages may be unclear about what they display in some languages.
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

const duplicateEncode = (word) => {
    const wordSplit = word.toLowerCase().split('');
    return wordSplit.map(c => wordSplit.filter(d => c === d).length === 1 ? '(' : ')').join('');
};

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));