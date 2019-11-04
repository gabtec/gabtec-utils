module.exports = {
	clearScreen: function() {
		process.stdout.write('\033c');
	}
};
