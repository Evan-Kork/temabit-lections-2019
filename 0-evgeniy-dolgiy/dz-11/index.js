let items = document.getElementsByClassName('item');
console.log('items', items);

document.getElementById('documentation').addEventListener('click', (event) => {
	const element = event.target;
	const parent = element.parentElement;
	if (parent.classList.contains('active')) {
		parent.classList.remove('active');
	} else {
		if (element.classList.contains('item-header')) {
			for (let i = 0; i < items.length; i++) {
				items[i].classList.remove('active');
			}
			parent.classList.add('active');
			console.log('event', parent);
		}
	}
});

let submitSlice = document.querySelector('.submit-slice');
console.log('submitSlice', submitSlice);

submitSlice.addEventListener('click', (event) => {
	// document.querySelector('.slice input')
	let parent = event.target.closest('.item');
	let array = (parent.querySelector('[name="array"]')).value.split(',');
	let start = (parent.querySelector('[name="start"]')).value;
	let end = (parent.querySelector('[name="end"]')).value;
	let newArray = array.slice(start, end);
	let result = parent.querySelector('.result');
	result.innerHTML = newArray.join(',')
});