'use strict';

var items = [
    {itemName:'Slice',
    itemHTML:`
            <div class="item">
                <div class="content-head">
                    <h3>Slice</h3>
                </div>
                <div class="content-body">
                <label for="sliceArrValue">Array</label>
                <input type="text" name="" id="sliceArrValue" readonly>
                <p>Enter the value to slice</p>
                <label for="startSlice">Start slice value</label>
                <input type="number" name="" id="startSlice" readonly>
                <label for="endSlice">End slice value</label>
                <input type="number" name="" id="endSlice" readonly>
                <button type="submit" onclick="methods.Slice(arrForSlice)">Slice</button></br></br>
                <label for="resultSlice">Result</label>
                <input type="text" name="" id="resultSlice" value="" readonly>
                
                </div>
            </div>`},
    {itemName:'Reverse',
    itemHTML:`
                <div class="item">
                    <div class="content-head">
                            <h3>Reverse</h3>
                    </div>
                    <div class="content-body">
                        </br>
                        <label for="revArr">Array</label>
                        <input type="text" name="" id="revArr" value="" readonly>
                        <button type="submit" onclick="methods.Reverse(arrForSlice)">Reverse</button></br></br>
                    </div>
                </div>`},
    {itemName:'Sort',
     itemHTML:`
                <div class="item">
                    <div class="content-head">
                            <h3>Sort</h3>
                    </div>
                    <div class="content-body">
                        </br>
                        <label for="sortArr">Array</label>
                        <input type="text" name="" id="sortArr" value="" size="31" readonly>
                        <button type="submit" onclick="methods.Sort(arrForSort)">Reverse</button></br></br>
                    </div>
                </div>`}];


var documentation = document.querySelector('#documentation')
    documentation.innerHTML = items[0].itemHTML + items[1].itemHTML + items[2].itemHTML;
var itemHeaders = document.querySelectorAll('.item');
var itemBodyes = document.querySelectorAll('.content-body')
var arrForSlice = [1,2,3,4,5,6,7,8,9,10,11,12]
var arrForSort = [24,65,76,12,42,1,8,0,213,345,122,457]
var startSlice = document.querySelector('input[id=startSlice]').value =4
var endSlice = document.querySelector('input[id=endSlice]').value = 11
document.querySelector('input[id=sliceArrValue]').value = arrForSlice
document.querySelector('input[id=revArr]').value = arrForSlice
document.querySelector('input[id=sortArr]').value = arrForSort
itemBodyes[1].classList.add('hide')
itemBodyes[2].classList.add('hide')
var methods = []
methods.Slice = function (arr){
    document.querySelector('input[id=resultSlice]').value = arr.slice(startSlice, endSlice)
}
methods.Reverse = function (arr){
    document.querySelector('input[id=revArr]').value = arr.reverse()
}
methods.Sort = function (arr){
    document.querySelector('input[id=sortArr]').value = arr.sort()
}
documentation.addEventListener('click', evt => {
    if(evt.target.classList.contains('content-head')){
        for(let i = 0; i < itemBodyes.length; i++){
            itemBodyes[i].classList.add('hide')
            evt.target.nextElementSibling.classList.remove('hide')
        }
    }
});









