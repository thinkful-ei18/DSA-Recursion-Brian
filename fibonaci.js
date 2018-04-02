// What is the input to the program
//num
// What is the output of the program
//fibonaci number
// What is the input to each recursive calls
//
// What is the output of each recursive calls
//

function fibonacci(num) {
	if (num <= 1) {
		return num;
	}
	return fibonacci(num - 1) + fibonacci(num - 2);
}
