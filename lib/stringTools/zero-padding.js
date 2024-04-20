/**
 * Assures a two char string. Will complete with zeros to achied 2 chars
 * @param { String | Number } num - The string to transform
 * @returns String - the transformed string
 */
export function zeroPadding(num) {
  return ("0" + num).slice(-2);
}
