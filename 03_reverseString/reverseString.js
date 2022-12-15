const reverseString = function(str) {
  const stringArray = str.split('');
  let reversedString = '';
  for (let i = stringArray.length - 1; i >= 0; i -= 1) {
    reversedString += stringArray[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
