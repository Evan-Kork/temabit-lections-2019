// ================= 1 ============================
const removeElement = (arr, num) => arr.filter(el => el !== num);
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
console.log(removeElement(array, 'Saratov'));

// ================= 2 =============================
function removeElements() {
	const args = Array.from(arguments);
	args.forEach((value, index) => {
		if (~args[0].indexOf(arguments[index])) {
			args[0].splice(args[0].indexOf(arguments[index]), 1);
		}
	});
}

const array22 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array22, 5, 1, 6);
console.log(array22);

// ================= 3 =============================
function unique(arr) {
	let result = [];
	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str);
		}
	}
	return result;
}
const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);
// ================= 4 =============================
const difference = (arr1, arr2) => arr1.filter(item => !arr2.includes(item));
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const res = difference(array1, array2);
console.log(res);
