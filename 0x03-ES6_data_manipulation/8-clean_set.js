export default function cleanSet(set, startString) {
  if (!startString || typeof (startString) !== 'string') {
    return '';
  }

  let newString = '';

  set.forEach((elem) => {
    if (elem && elem.startsWith(startString)) {
      newString += `${elem.slice(startString.length)}-`;
    }
  });
  return newString.slice(0, newString.length - 1);
}
