const items = [
    {
        title: 'splice',
        bodyHTML: `<form id="splice">
                        <input type="text" class="array" placeholder="array" required>
        <input type="number" class="start-index" step="1" placeholder="start-index" required>
                        <input type="number" class="end-index" step="1" placeholder="end-index" required>
                        <button class="button" type="submit">Submit</button>
                </form>
                <h4>Result</h4>`,
        implementMethod: function() {
            document.querySelector('#splice > button').addEventListener('click', (event)=> {
                let data = getInputData (this.title);
                let result = data.array.splice(data['start-index'], data['end-index']);
                displayResult(result);
                event.preventDefault();
            })
        } 
    },
    {
        title: 'slice',
        bodyHTML: `<form id="slice">
                        <input type="text" class="array" placeholder="array" required>
                        <input type="number" class="start-index" step="1" placeholder="start index" required>
                        <input type="number" class="end-index" step="1" placeholder="end index" required>
                        <button class="button" type="submit">Submit</button>
                </form>
                <h4>Result</h4>`,
        implementMethod: function() {
            document.querySelector('#slice > button').addEventListener('click', (event)=> {
                let data = getInputData (this.title);
                let result = data.array.slice(data['start-index'], data['end-index']);
                displayResult(result);
                event.preventDefault();
            })
        } 
    },
    {
        title: 'concat',
        bodyHTML: `<form id="concat">
                        <input type="text" class="array" placeholder="array" required>
                        <input type="text" class="concat-array" placeholder="second array" required>
                        <button class="button" type="submit">Submit</button>
                </form>
                <h4>Result</h4>`,
        implementMethod: function() {
            document.querySelector('#concat > button').addEventListener('click', (event)=> {
                let data = getInputData (this.title);
                let result = data.array.concat(data['concat-array']);
                displayResult(result);
                event.preventDefault();
            })
        } 
    },
    {
        title: 'indexOf',
        bodyHTML: `<form id="indexOf">
                        <input type="text" class="array" placeholder="array" required>
                        <input type="text" class="search-item" step="1" placeholder="search element" required>
                        <input type="number" class="start-index" step="1" placeholder="start index" required>
                        <button class="button" type="submit">Submit</button>
                </form>
                <h4>Result</h4>`,
        implementMethod: function() {
            document.querySelector('#indexOf > button').addEventListener('click', (event)=> {
                let data= getInputData (this.title);
                let result = data.array.indexOf(data['search-item'], data['start-index']);
                displayResult(result);
                event.preventDefault();
            })
        } 
    },
    {
        title: 'includes',
        bodyHTML: `<form id="includes">
                        <input type="text" class="array" placeholder="array" required>
                        <input type="number" class="search-item" step="1" placeholder="search element" required>
                        <input type="number" class="start-index" step="1" placeholder="start index" required>
                        <button class="button" type="submit">Submit</button>
                </form>
                <h4>Result</h4>`,
        implementMethod: function() {
            document.querySelector('#includes > button').addEventListener('click', (event)=> {
                let data = getInputData (this.title);
                let result = data.array.includes(data['search-item'],data['start-index']);
                displayResult(result);
                event.preventDefault();
            })
        } 

    },
]
  
function createItem (item, index) {
    let divItem = document.createElement('div');
    divItem.className = (!index) ? "item active" : "item";
    divItem.innerHTML = `<div class='item-title'>${item.title}</div><div class='item-body'>${item.bodyHTML}</div>`;
    
    document.querySelector('#documenation').append(divItem);
};

function displayResult (res) {
    let divResult = document.querySelector('.result') || document.createElement('div')
    divResult.className  = "result";
    divResult.innerHTML = `${res}`
    document.querySelector('.active>.item-body').append(divResult);
}
items.forEach((elem, index) => {
    createItem(elem, index);
    elem.implementMethod();
});

document.querySelector('#documenation').addEventListener('click', (event) => {
    if (!event.target.parentElement.classList.contains('active') && event.target.classList.contains('item-title') ){
        if (document.querySelector('.result')) {
            document.querySelector('.result').remove('div')
        };
        for (el of document.querySelectorAll('.active>.item-body>form>input')) {
            el.value = "";
        };
        document.querySelector('.item.active').classList.remove('active');
        event.target.parentElement.classList.add('active');

    }
})

function getInputData (arrayMethod) {
let form = document.querySelector("#"+arrayMethod);
    let inputData = {};
    for (let elem of form.children) {
        let inputClass = elem.className;
        if (inputClass.indexOf('array') !== -1){
            inputData[inputClass]=elem.value.split(',');
        }
        else if (inputClass.indexOf('index') !== -1) {
            inputData[inputClass] = Number(elem.value);
        } else if (elem != form.lastElementChild) {
            inputData[inputClass] = elem.value;
        }
    }
    return inputData; 
}