document.addEventListener("DOMContentLoaded",(event) => {
	var sliceContener=document.getElementById("sliceitemBody");
	sliceContener.innerHTML+='<input type="text" name="array" value="1,2,3,4,5,6,7,8"/><input type="text" name="max" value="1"/><input type="text" name="min" value="5"/><input id="sliceBtn" type="submit" /><div id="rez"></div>';
		
});
document.getElementById("sliceContener").addEventListener('click', (event) => {
	var test=document.getElementById("sliceBtn");
	document.getElementById("sliceText").addEventListener('click', (event) => {
		if (null==test) {
			allClear();
			var sliceContener=document.getElementById("sliceitemBody");
			 sliceContener.innerHTML+='<input type="text" name="array" value="1,2,3,4,5,6,7,8"/><input type="text" name="max" value="1"/><input type="text" name="min" value="5"/><input id="sliceBtn" type="submit" /><div id="rez"></div>';
		}	
		else{
			document.getElementById("sliceitemBody").innerHTML='';
		}
	});try {
	document.getElementById("sliceBtn").addEventListener('click', (event) => {
		slice();
	});}catch{}
});

document.getElementById("spliceContener").addEventListener('click', (event) => {
	var test=document.getElementById("spliceBtn");
	document.getElementById("spliceText").addEventListener('click', (event) => {

		if (null==test) {
			allClear();
			var sliceContener=document.getElementById("spliceitemBody");
			 sliceContener.innerHTML+='<input type="text" name="array" value="1,2,3,4,5,6,7,8"/><input type="text" name="start" value="1"/><input type="text" name="end" value="1"/><input id="spliceBtn" type="submit"/><div id="rez"></div>';
		}	
		else{
			document.getElementById("spliceitemBody").innerHTML='';
		}
	});
	try{
	document.getElementById("spliceBtn").addEventListener('click', (event) => {
		splice();
	});
	}catch{}
});

document.getElementById("concatContener").addEventListener('click', (event) => {
	var test=document.getElementById("concatBtn");
	document.getElementById("concatText").addEventListener('click', (event) => {

		if (null==test) {
			allClear();
			var sliceContener=document.getElementById("concatitemBody");
			 sliceContener.innerHTML+='<input type="text" name="arrayOne" value="1,2,3,4,5,6,7,8"/><input type="text" name="arraytwo" value="1,2,3,4,5,6,7,8"/><input id="concatBtn" type="submit" /><div id="rez"></div>';
		}	
		else{
			document.getElementById("concatitemBody").innerHTML='';
		}
	});
	try{
	document.getElementById("concatBtn").addEventListener('click', (event) => {
		concat();
	});
	}catch{}
});
function allClear() {
	document.getElementById("sliceitemBody").innerHTML='';
	document.getElementById("spliceitemBody").innerHTML='';
	document.getElementById("concatitemBody").innerHTML='';
}
function slice(){
		var array = document.getElementsByTagName("input")[0].value.split(',');
		var newarray= array.slice(document.getElementsByTagName("input")[1].value,document.getElementsByTagName("input")[2].value);
		document.getElementById("rez").innerHTML=newarray;
}
function splice(){
	var array = document.getElementsByTagName("input")[0].value.split(',');
	array.splice(document.getElementsByTagName("input")[1].value,document.getElementsByTagName("input")[2].value);
	document.getElementById("rez").innerHTML=array;
}
function concat(){
	var array= document.getElementsByTagName("input")[0].value.split(',');
	var newarray = array.concat(document.getElementsByTagName("input")[1].value.split(','));
	document.getElementById("rez").innerHTML=newarray;
}