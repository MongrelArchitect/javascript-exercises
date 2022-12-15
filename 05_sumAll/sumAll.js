const sumAll = function(num1, num2) {
  if (num1 < 0 || 
      num2 < 0 || 
      typeof num1 !== 'number' || 
      typeof num2 !== 'number') {
    return 'ERROR';
  }

  let biggest;
  let smallest;
  if (num1 > num2) {
    biggest = num1;
    smallest = num2;
  } else {
    biggest = num2;
    smallest = num1;
  }

  let sum = smallest;

  for (let i = smallest + 1; i <= biggest; i += 1) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
