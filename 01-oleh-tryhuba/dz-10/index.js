
// ================= 1 ============================
const removeElement = (arr, num) => arr.filter(el => el != num);
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
console.log(removeElement(array, 'Saratov'));

// ================= 2 =============================
const removeElements = (arr, ...arr2) => {
	for (let i = 0; i < arr2.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			const count = arr.indexOf(arr2[i]);
			if (count !== -1) {
				arr.splice(count, 1);
			}
		}
	}
	return arr
};
const array22 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array22, 5, 1, 6);
console.log(array22);

// ================= 3 =============================
const unique = arr => [...new Set(arr)];
const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);

// ================= 4 =============================
const difference = (arr1, arr2) => {
	return arr1.filter(item => {
		return false === arr2.includes(item, 0);
	});
};
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const res = difference(array1, array2);
console.log(res);
