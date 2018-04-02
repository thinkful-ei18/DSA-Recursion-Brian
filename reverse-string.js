// What is the input to the program
//string
// What is the output of the program
//reverse string
// What is the input to each recursive calls
//string
// What is the output of each recursive calls
//string[-1]

function reverseString(string) {
	if (string === '') {
		return '';
	}
	const lastLetter = string.substr(string.length - 1);
	return lastLetter + reverseString(string.pop);
}
