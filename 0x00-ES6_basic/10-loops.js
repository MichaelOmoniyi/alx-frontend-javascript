export default function appendToEachArrayValue(array, appendString) {
  const resultArray = [];
  for (let idx of array) {
    resultArray.push(appendString + idx);
  }

  return resultArray;
}
