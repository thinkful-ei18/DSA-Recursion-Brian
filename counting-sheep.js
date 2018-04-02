// What is the input to the program
//3
// What is the output of the program
//3 - Another Sheep Jumps Over The Fence
//2 - ""
//1 - ""
// What is the input to each recursive calls
//Number of sheep left
// What is the output of each recursive calls
//Number of sheep + "Another Sheep Jump Over the Fence"

function countingSheep(num) {
	if (num === 0) {
		return;
	}
	console.log(num);
	countingSheep(num - 1) + 'Another Sheep Jumps Over the Fence';
}

countingSheep(3);
