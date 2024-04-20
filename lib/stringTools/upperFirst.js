/**
 * Makes the first letter of a given string, a upperCase
 * @param { String } src - The string to transform
 * @returns String - the transformed string
 */
export function upperFirst(src) {
  if (typeof src !== "string") {
    throw new Error("Param must be a string.");
  }

  const aux = src.split("");
  aux[0] = aux[0].toUpperCase();

  return aux.join("");
}
