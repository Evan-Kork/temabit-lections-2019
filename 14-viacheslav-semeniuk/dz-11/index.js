const methodsArr = ['Unshift', 'Shift', 'Push', 'Filter'];
const container = document.getElementById('accordionContainer');

methodsArr.forEach((item, index) => {
  container.insertAdjacentHTML('beforeend', `
    <div class="card">
      <div class="card-header" id="heading${item}">
        <h2 class="mb-0">
          <button
            class="btn btn-link"
            id="cardButton${item}"
            type="button"
            data-toggle="collapse"
            data-target="#collapse${item}"
            aria-expanded="true"
            aria-controls="collapse${item}"
          >
            ${item}
          </button>
        </h2>
      </div>
      <div
        id="collapse${item}"
        class="collapse ${(index === 0) ? 'show' : ''}"
        aria-labelledby="heading${item}"
        data-parent="#accordionContainer"
      >
        <div class="card-body">
          <div>
            Array:
            <input type="text" value="2,3,4,5" name="array${item}" />
          </div>
          ${ (item !== 'Shift') 
            ? `<div>${item}:
                <input type="text" value="0,1" name="add${item}" />
              </div>` 
            : ''
          }
          <button class="submit${item}">Submit</button>
          <div class="result${item}"></div>
        </div>
      </div>
    </div>
  `);
})

let unshiftCard = () => {
  const card = document.querySelector('#cardButtonUnshift');
  const submitElement = document.querySelector('.submitUnshift');
  
  // Clear values after closing accordion element
  card.addEventListener('click', event => {
    const buttonParent = event.target.closest('.card');
    const array = buttonParent.querySelector('[name="arrayUnshift"]');
    const add = buttonParent.querySelector('[name="addUnshift"]');
    const resultElement = buttonParent.querySelector('.resultUnshift')
    array.value = [2,3,4,5];
    add.value = [0,1];
    resultElement.innerHTML = ""
  })

  submitElement.addEventListener('click', event => {
    // HTML elements
    const parent = event.target.closest('.card-body');
    const startingArray = parent.querySelector('[name="arrayUnshift"]');
    const elementsToAdd = parent.querySelector('[name="addUnshift"]');
    const resultElement = parent.querySelector('.resultUnshift')
    // Unshifting procedure
    const array = startingArray.value.split(',');
    const addArr = elementsToAdd.value.split(',');
    array.unshift(addArr);
    resultElement.innerHTML = array.join(',');
  })
}

let shiftCard = () => {
  const card = document.querySelector('#cardButtonShift');
  const submitElement = document.querySelector('.submitShift')

  // Clear values after closing accordion element
  card.addEventListener('click', event => {
    const buttonParent = event.target.closest('.card');
    const array = buttonParent.querySelector('[name="arrayShift"]');
    const resultElement = buttonParent.querySelector('.resultShift')
    array.value = [2,3,4,5];
    resultElement.innerHTML = ""
  })

  submitElement.addEventListener('click', event => {
    // HTML elements
    const parent = event.target.closest('.card-body');
    const startingArray = parent.querySelector('[name="arrayShift"]');
    const resultElement = parent.querySelector('.resultShift')
    // Delete 1st element
    const array = startingArray.value.split(',');
    array.shift();
    resultElement.innerHTML = array.join(',');
  })
}

let pushCard = () => {
  const card = document.querySelector('#cardButtonPush');
  const submitElement = document.querySelector('.submitPush');
  
  // Clear values after closing accordion element
  card.addEventListener('click', event => {
    const buttonParent = event.target.closest('.card');
    const array = buttonParent.querySelector('[name="arrayPush"]');
    const add = buttonParent.querySelector('[name="addPush"]');
    const resultElement = buttonParent.querySelector('.resultPush')
    array.value = [2,3,4,5];
    add.value = [6,7];
    resultElement.innerHTML = ""
  })

  submitElement.addEventListener('click', event => {
    // HTML elements
    const parent = event.target.closest('.card-body');
    const startingArray = parent.querySelector('[name="arrayPush"]');
    const elementsToAdd = parent.querySelector('[name="addPush"]');
    const resultElement = parent.querySelector('.resultPush')
    // Unshifting procedure
    const array = startingArray.value.split(',');
    const addArr = elementsToAdd.value.split(',');
    array.push(addArr);
    resultElement.innerHTML = array.join(',');
  })
}

let filterCard = () => {
  const card = document.querySelector('#cardButtonFilter');
  const submitElement = document.querySelector('.submitFilter');
  
  // Clear values after closing accordion element
  card.addEventListener('click', event => {
    const buttonParent = event.target.closest('.card');
    const array = buttonParent.querySelector('[name="arrayFilter"]');
    const add = buttonParent.querySelector('[name="addFilter"]');
    const resultElement = buttonParent.querySelector('.resultFilter')
    array.value = [2,3,4,5];
    add.value = [3,4,5];
    resultElement.innerHTML = ""
  })

  submitElement.addEventListener('click', event => {
    // HTML elements
    const parent = event.target.closest('.card-body');
    const startingArray = parent.querySelector('[name="arrayFilter"]');
    const elementsToAdd = parent.querySelector('[name="addFilter"]');
    const resultElement = parent.querySelector('.resultFilter')
    // Unshifting procedure
    const array = startingArray.value.split(',');
    const addArr = elementsToAdd.value.split(',');
    resultElement.innerHTML = array.filter(n => !addArr.includes(n));
  })
}

unshiftCard()
shiftCard()
pushCard()
filterCard()



