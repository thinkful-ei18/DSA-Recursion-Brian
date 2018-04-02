// What is the input to the program
//string with separator
// What is the output of the program
//string without separator
// What is the input to each recursive calls
//
// What is the output of each recursive calls
//

function seperate(string, delimeter) {
	const delimIndex = string.indexOf(delimeter);
	if (delimIndex === -1) {
		return [string];
	}
	return [
		string.slice(0, delimIndex),
		...split(string.slice(delimIndex + 1), delimeter)
	];
}

console.log(seperate('1/21/18'));
