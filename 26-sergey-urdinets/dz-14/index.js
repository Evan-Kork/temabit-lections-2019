createElementsOfDOM(); //отрисовка элементов

document.querySelector("#submit").addEventListener("click", getResults);

function createElementsOfDOM() {
 
  const parent = document.querySelector("#main");
  
  let insertDataBlock = document.createElement("div");
  insertDataBlock.id = "insert-data-block";
  parent.appendChild(insertDataBlock);
  
  let submit = document.createElement("input");
  submit.id = "submit";
  submit.type = "button";
  submit.value = "Submit";
  parent.appendChild(submit);
    
  let resultsBlock = document.createElement("div");  
  resultsBlock.id = "result-block";
  resultsBlock.classList.add("result-block");
  parent.appendChild(resultsBlock);
}

function getResults() {
  //очистка результатов
  let element = document.querySelector("#result-block");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  //блокировка кнопки
  document.querySelector("#submit").disabled = true;
  //создать запросы и отослать
  
  //перебор инпутов и sendDataFetch для каждого


// https://learn.javascript.ru/static-properties-and-methods
  //получить результат 
  //и вызвать функцию отрисовки результатов или сразу в промис
  
  
  
  
  
  resultVisualizations("url", 210);
  resultVisualizations("url", 330);
  resultVisualizations("url", 400);


  // разблокировать кнопку
  document.querySelector("#submit").disabled = false;
}

function sendDataFetch(url) {
  fetch(url)
  .then((response) => {
    resultVisualizations(url, response.status);
  }).catch(error => {
    alert("ERORRRRR");
  });
}

function resultVisualizations(url, statusCode) {  //адрес запроса и код ответа
  const parentForResults = document.querySelector("#result-block");

  let label = document.createElement("label");
  label.textContent = `URL: ${url}, Code: ${statusCode}.`;

  if (statusCode >= 200 && statusCode < 300) {
    label.classList.add("success");
  } else if (statusCode >= 300 && statusCode < 400) {
    label.classList.add("warning");
  } else if (statusCode >= 400) {
    label.classList.add("danger");
  }
  parentForResults.appendChild(label);
}