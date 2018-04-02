// What is the input to the program
//number
// What is the output of the program
//number(number + 1)/2
// What is the input to each recursive calls
//
// What is the output of each recursive calls

function calculateNthTriangle(num) {
	if (num === 1) {
		return num;
	}
	return calculateNthTriangle(num - 1) + num;
}

console.log(calculateNthTriangle(10));
