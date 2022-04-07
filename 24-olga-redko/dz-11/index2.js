let items = document.getElementsByClassName('item');
let container = document.getElementById('documentation');
let methods = ['Slice', 'Concat', 'Fill'];

function createSlice(title) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = '<div class="item-header">' + title + '</div>\
			<div class="item-body">\
			<div>\
					<label for="slice-array">Array</label>\
					<input id="slice-array" type="text" value="1,2,3,4,5" name="array">\
				</div>\
								<div>\
					<label for="slice-start">Start</label>\
					<input id="slice-start" type="number" step="1" value="1" name="start">\
				</div>\
								<div>\
					<label for="slice-end">End</label>\
					<input id="slice-end" type="number" step="1" value="3" name="end">\
				</div>\
				<div>\
				<button class="slice-submit">Submit</button>\
			</div>\
			<div class="slice-result"></div>\
			</div>';
    container.appendChild(newItem);
    return false;
}

function createConcat(title) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = '<div class="item-header">' + title + '</div>\
			<div class="item-body">\
										<div>\
					<label for="concat-array">Array</label>\
					<input id="concat-array" type="text" value="1,2,3,4,5" name="array">\
				</div>\
								<div>\
					<label for="concat-arg1">Argument 1</label>\
					<input id="concat-arg1" type="number" step="1" value="1" name="arg1">\
				</div>\
								<div>\
					<label for="concat-agr2">Argument 2</label>\
					<input id="concat-arg2" type="text" value="10,11,21" name="arg2">\
				</div>\
				<div>\
				<button class="concat-submit">Submit</button>\
			</div>\
			<div class="concat-result"></div>\
			</div>';
    container.appendChild(newItem);
    return false;
}

function createFill(title) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = '<div class="item-header">' + title + '</div>\
			<div class="item-body">\
										<div>\
					<label for="fill-array">Array</label>\
					<input id="fill-array" type="text" value="1,2,3,4,5" name="array">\
				</div>\
								<div>\
					<label for="fill-value">Value</label>\
					<input id="fill-value" type="number" value="5" name="fill-value">\
				</div>\
								<div>\
					<label for="fill-start">Start</label>\
					<input id="fill-start" type="number" step="1" value="2" name="start">\
													<div>\
					<label for="fill-end">End</label>\
					<input id="fill-end" type="number" step="1" value="4" name="end">\
				</div>\
				</div>\
				<div>\
				<button class="fill-submit">Submit</button>\
			</div>\
			<div class="fill-result"></div>\
			</div>';
    container.appendChild(newItem);
    return false;
}

for (let i = 0; i < methods.length - 1; i++) {
    createSlice(methods[i]);
    if (i = 1) createConcat(methods[i]);
    if (i = 2) createFill(methods[i]);

}
container.firstChild.classList.add('active');

document.querySelector('#documentation').addEventListener('click', (event) => {
    if (event.target.classList.contains('item-header')) {
        console.log('event', event.target.parentElement);
        if (event.target.parentElement.classList.contains('active')) {
            event.target.parentElement.classList.remove('active')
        } else {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove('active');
            }
            event.target.parentElement.classList.toggle('active');
        }
    }
});

let sliceSumbit = document.querySelector('.slice-submit');
console.log('sliceSumbit', sliceSumbit);

sliceSumbit.addEventListener('click', (event) => {
    let parent = event.target.closest('.item');
    let array = (parent.querySelector('[name="array"]')).value.split(',');
    let start = (parent.querySelector('[name="start"]')).value;
    let end = (parent.querySelector('[name="end"]')).value;
    let newArray = array.slice(start, end);
    let result = parent.querySelector('.slice-result');
    result.innerHTML = newArray.join(',')
});

let concatSumbit = document.querySelector('.concat-submit');
console.log('sconcatSumbit', concatSumbit);

concatSumbit.addEventListener('click', (event) => {
    let parent = event.target.closest('.item');
    let array = (parent.querySelector('[name="array"]')).value.split(',');
    let arg1 = (parent.querySelector('[name="arg1"]')).value;
    let arg2 = (parent.querySelector('[name="arg2"]')).value;
    let newArray = array.concat(arg1, arg2);
    let result = parent.querySelector('.concat-result');
    result.innerHTML = newArray.join(',')
});


let fillSumbit = document.querySelector('.fill-submit');
console.log('fillSumbit', fillSumbit);

fillSumbit.addEventListener('click', (event) => {
    let parent = event.target.closest('.item');
    let array = (parent.querySelector('[name="array"]')).value.split(',');
    let value = (parent.querySelector('[name="fill-value"]')).value;
    let start = (parent.querySelector('[name="start"]')).value;
    let end = (parent.querySelector('[name="end"]')).value;
    let newArray = array.fill(value, start, end);
    let result = parent.querySelector('.fill-result');
    result.innerHTML = newArray.join(', ')
});

function clearResult() {
    document.querySelector('.slice-result').innerHTML = '';
    document.querySelector('.concat-result').innerHTML = '';
    document.querySelector('.fill-result').innerHTML = '';
}

document.querySelector('.item-header').addEventListener('click', clearResult, false);