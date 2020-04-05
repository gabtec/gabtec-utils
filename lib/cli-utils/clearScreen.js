module.exports = function clearScreen() {
  process.stdout.write('\033c');
}
