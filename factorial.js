// What is the input to the program
//number
// What is the output of the program
//factorial of number
// What is the input to each recursive calls
//num-1
// What is the output of each recursive calls
//

function factorial(num) {
	if (num <= 1) {
		return 1;
	}
	return num * factorial(num - 1);
}
