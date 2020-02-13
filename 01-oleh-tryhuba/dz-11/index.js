let items = document.querySelectorAll('.item');
let container = document.querySelector('#documentation');
(createSlice = (title = 'Slice') => {
		let newItem = document.createElement('div');
		newItem.classList.add('item');
		newItem.innerHTML = `
		<div class="item-header"> ${title} </div>
			<div class="item-body">
			<div>
				<label for="slice-array">Array</label>
				<input id="slice-array" type="text" value="1,2,3,4,5" name="array">
			</div>
			<div>
				<label for="slice-start">Start</label>
				<input id="slice-start" type="number" step="1" value="1" name="start">
			</div>
			<div>
				<label for="slice-end">End</label>
				<input id="slice-end" type="number" step="1" value="3" name="end">
			</div>
			<div>
				<button class="slice-submit">Submit</button>
			</div>
			<div class="slice-result"></div>
		</div>`;
		container.appendChild(newItem);
		return false;
	})();
(createConcat = (title = "Concat") => {
		let newItem = document.createElement('div');
		newItem.classList.add('item');
		newItem.innerHTML = `
	<div class="item-header">${title}</div>
		<div class="item-body">
			<div>
				<label for="concat-array">Array</label>
				<input id="concat-array" type="text" value="1,2,3,4,5" name="array">
			</div>
			<div>
				<label for="concat-arg1">Argument 1</label>
				<input id="concat-arg1" type="number" step="1" value="1" name="arg1">
			</div>
			<div>
				<label for="concat-agr2">Argument 2</label>
				<input id="concat-arg2" type="text" value="10,11,21" name="arg2">
			</div>
			<div>
				<button class="concat-submit">Submit</button>
			</div>
			<div class="concat-result"></div>
		</div>`;
		container.appendChild(newItem);
		return false;
	})();
(createFill = (title ="Fill") => {
		let newItem = document.createElement('div');
		newItem.classList.add('item');
		newItem.innerHTML = `
	<div class="item-header"> ${title}</div>
		<div class="item-body">
			<div>
				<label for="fill-array">Array</label>
				<input id="fill-array" type="text" value="1,2,3,4,5" name="array">
			</div>
			<div>
				<label for="fill-value">Value</label>
				<input id="fill-value" type="number" value="5" name="fill-value">
			</div>
			<div>
				<label for="fill-start">Start</label>
				<input id="fill-start" type="number" step="1" value="2" name="start">
			<div>
				<label for="fill-end">End</label>
				<input id="fill-end" type="number" step="1" value="4" name="end">
			</div>
			</div>
			<div>
				<button class="fill-submit">Submit</button>
			</div>
			<div class="fill-result"></div>
		</div>`;
		container.appendChild(newItem);
		return false;
	})();

container.firstChild.classList.add('active');

document.querySelector('#documentation').addEventListener('click', (event) => {
	if (event.target.classList.contains('item-header')) {
		if (event.target.parentElement.classList.contains('active')) {
			event.target.parentElement.classList.remove('active')
		}
		else {
			for (let i = 0; i < items.length; i++) {
				items[i].classList.remove('active');
			}
			event.target.parentElement.classList.toggle('active');
		}
	}
});

const sliceSumbit = document.querySelector('.slice-submit');
sliceSumbit.addEventListener('click', (e) => {
	
	const parent = e.target.closest('.item');
	const array = parent.querySelector('[name="array"]').value.split(',');
	const start = parent.querySelector('[name="start"]').value;
	const end = parent.querySelector('[name="end"]').value;
	const newArray = array.slice(start, end);
	const result = parent.querySelector('.slice-result');
	result.innerHTML = newArray.join(',')
});

const concatSumbit = document.querySelector('.concat-submit');
concatSumbit.addEventListener('click', (e) => {
	const parent = e.target.closest('.item');
	const array = parent.querySelector('[name="array"]').value.split(',');
	const arg1 = parent.querySelector('[name="arg1"]').value;
	const arg2 = parent.querySelector('[name="arg2"]').value;
	const newArray = array.concat(arg1, arg2);
	const result = parent.querySelector('.concat-result');
	result.innerHTML = newArray.join(',')
});


const fillSumbit = document.querySelector('.fill-submit');

fillSumbit.addEventListener('click', (e) => {
	const parent = e.target.closest('.item');
	const array = parent.querySelector('[name="array"]').value.split(',');
	const value = parent.querySelector('[name="fill-value"]').value;
	const start = parent.querySelector('[name="start"]').value;
	const end = parent.querySelector('[name="end"]').value;
	const newArray = array.fill(value, start, end);
	const result = parent.querySelector('.fill-result');
	result.innerHTML = newArray.join(', ')
});

function clearResult() {
	document.querySelector('.slice-result').innerHTML = '';
	document.querySelector('.concat-result').innerHTML = '';
	document.querySelector('.fill-result').innerHTML = '';
}

document.querySelector('.item-header').addEventListener('click', clearResult, false);