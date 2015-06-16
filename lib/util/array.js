
export function contains (array, element) {
  return array.indexOf(element) !== -1;
}

export function addOnce (array, element) {
    return contains(array, element) ? array : array.concat([element]);
}

export function remove (array, element) {
    return array.filter(item => item !== element);
}