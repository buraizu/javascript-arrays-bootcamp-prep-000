var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element) {
  array = [element, ...chocolateBars];
  return array;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element) {
  array = [...chocolateBars, element];
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  return array.shift();
}

function removeElementFromBeginningOfArray (array) {
  return array.slice();
}

function destructivelyRemoveElementFromEndOfArray (array) {
  return array.pop();
}

function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1);
}





