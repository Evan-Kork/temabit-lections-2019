const methodsArr = ['unshift', 'shift', 'push', 'pop'];
const container = document.getElementById('accordionContainer');

let unshiftCard = () => {
  container.insertAdjacentHTML('beforeend', `
    <div class="card">
      <div class="card-header" id="headingUnshift">
        <h2 class="mb-0">
          <button
            class="btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target="#collapseUnshift"
            aria-expanded="true"
            aria-controls="collapseUnshift"
          >
            Unshift
          </button>
        </h2>
      </div>
      <div
        id="collapseUnshift"
        class="collapse show"
        aria-labelledby="headingUnshift"
        data-parent="#accordionContainer"
      >
        <div class="card-body">
          <div>
            Array:
            <input type="text" value="2,3,4,5" name="arrayUnshift" />
          </div>
          <div>
            Add to the beginning of an array:
            <input type="text" value="0,1" name="addUnshift" />
          </div>
          <button class="submitUnshift">Submit</button>
          <div class="resultUnshift"></div>
        </div>
      </div>
    </div>
  `);
  const submitElement = document.querySelector('.submitUnshift')
  
  submitElement.addEventListener('click', event => {
    // HTML elements
    const parent = event.target.closest('.card-body');
    const startingArray = parent.querySelector('[name="arrayUnshift"]');
    const elementsToAdd = parent.querySelector('[name="addUnshift"]');
    const resultElement = parent.querySelector('.resultUnshift')
    // Prepend to an array
    const array = startingArray.value.split(',');
    const addArr = elementsToAdd.value.split(',');
    array.unshift(addArr);
    resultElement.innerHTML = array.join(',');
  })
}

unshiftCard()



