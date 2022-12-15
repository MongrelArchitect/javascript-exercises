const removeFromArray = function(arrayToEdit) {
  let newArray = arrayToEdit;
  for (let i = 1; i < arguments.length; i += 1) {
    newArray = newArray.filter((elementToCheck) => {
      return elementToCheck !== arguments[i];
    });
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
