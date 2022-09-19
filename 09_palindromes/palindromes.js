const palindromes = function (str) {
  const lowerCase = str.toLowerCase().replace(/[^a-z]/g, '');

  const reverseStr = lowerCase.split('').reverse().join('');

  return lowerCase == reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
