let items = document.getElementsByClassName('item');

document.querySelector('#documentation').addEventListener('click', (event) => {
	if (event.target.classList.contains('item-header')) {
		console.log('active', event.target.parentElement.classList.contains('active'));
		if (event.target.parentElement.classList.contains('active')) {
			event.target.parentElement.classList.remove('active');
		} else {
			for (let i = 0; i < items.length; i++) {
				items[i].classList.remove('active');
			}
			event.target.parentElement.classList.add('active');
		}
		console.log('event', event.target.parentElement);
	}
});

document.querySelector('.slice-submit').addEventListener('click', (event) => {
	let sliceArray = (document.querySelector('#slice-array')).value.split(',');
	let sliceStart = document.querySelector('#slice-start').value;
	let sliceEnd = document.querySelector('#slice-end').value;
	let newSliceArray = sliceArray.slice(sliceStart, sliceEnd);
	console.log('sliceArray', sliceArray, sliceStart, sliceEnd, newSliceArray);
	document.querySelector('.slice-result').innerHTML = newSliceArray.join(', ');
})

