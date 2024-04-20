/**
 * Crops a string to fit a given number of chars. Append '...' to the end of extracted substring
 * @param { String } src - The string to crop
 * @param { Number } size - The target size, to crop
 * @returns String - the cropped string appended with '...' at the end. If src.length < size, will return src string untouched
 */
export function crop(src, size) {
  if (typeof src !== "string") {
    throw new Error("First param must be a string.");
  }

  if (typeof size !== "number") {
    throw new Error("Second param must be a number.");
  }

  if (src.length > size) {
    const aux = src.slice(0, size);
    return aux + "...";
  }

  return src;
}
