// What is the input to the program
//[1, 2, 3]
// What is the output of the program
//[2, 4, 6]
// What is the input to each recursive calls
//arr[0]
// What is the output of each recursive calls
//arr[0] * 2

function arrayDouble(array) {
	if (array === []) {
		return [];
	}
	const doubleNumber = array[0] * 2;

	return arrayDouble(array.slice(1));
}

arrayDouble([4, 8, 10, 12]);
