export { parse };

function parse(line) {
	const parts = line.split('\t');

	return `${parts[3]} - ${parts[2]}`;
}
