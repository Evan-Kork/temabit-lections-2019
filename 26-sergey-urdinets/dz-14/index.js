createElementsOfDOM(); //отрисовка элементов

document.querySelector("#submit").addEventListener("click", getResults);

function createElementsOfDOM() {
 
  const parent = document.querySelector("#main");
  
  let insertDataBlock = document.createElement("div");
  insertDataBlock.id = "insert-data-block";
  let textArea = document.createElement("textarea");
  textArea.id = "text-area";
  
  
  
  textArea.value = "https://jsonplaceholder.typicode.com/todos\n"
                  +"https://jsonplaceholder.typicode.com/possssts\n"   //error
                  +"https://jsonplaceholder.typicode.com/photos\n"
                  +"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer\n"
                  +"https://jsonplaceholder.typicode.com/posts\n"
                  +"https://jsonplaceholder.typicode.com/photos\n"
                  +"https://marketplace.visualstudio.com/items?itemName=ritwissckdey.LiveServer";  //error



  insertDataBlock.appendChild(textArea);
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

  document.querySelector("#submit").disabled = true;  

  const urlList = document.querySelector("#text-area").value.split('\n');   

  let requests = urlList.map(url => sendData(url)); 


  Promise.all(requests)
  .catch(err => console.error("Error!", err.statusText, err.status))
  .finally( () => document.querySelector("#submit").disabled = false);


  // разблокировать кнопку
  // document.querySelector("#submit").disabled = false;
}

function sendData(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      // resolve(xhr.response);
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      }
      resultVisualizations(this.responseURL, this.status);
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      });
    };
    xhr.send();
  });
}

function resultVisualizations(url, statusCode) {  
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


