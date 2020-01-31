{
    var array1 = ["test", "test1", "test2", "test3", "test4", "test5", "test6","11"];
    const array2 = ["test6"];

    function unicalnum(array, arrayOne) {
    	var newarray = [];
        for(var i=0;i<array.length;i++){
        	if(!findelement(arrayOne,array[i])){
        		newarray.push(array[i]);
        	}
        }
        return newarray;
    }
    function findelement(array,value){
    	for (var i = 0; i < array.length; i++) {
    		if (value == array[i]) {
    			return true;
    		}
    		return false;
    	}
    }
    document.write(unicalnum(array1,array2));
}
{
	var array = ["test", "test1", "test2", "test3", "test4", "test5", "test6"];
	function removeElement(array,name){
		for(var i=0;i!=array.length;i++){
			if(array[i]==name){
				array.splice(i,1)
			}
		}
	}
	removeElement(array, "test3");
	document.write(array);
}
{
	var array = ["test", "test1", "test2", "test3", "test4", "test5", "test6"];
	function removeElement(array,arrayName){
		for(var i=0;i<arrayName.length;i++){
			for(var j =0;j<array.length;j++){
				if(array[j]==arrayName[i]){
					array.splice(j,1)
				}
			}
		}
	}
	removeElement(array,["test", "test5"]);
	document.write(array);
}
{
    var array = ["test", "test1", "test2", "test3", "test4", "test5", "test6", "test", "test1", "test2", "test7", "test8", "test9", "test6"];

    function getUniqTags(arr) {
    	for(var i=0;i<arr.length;i++){
    		for(var j=0;j<arr.length;j++){
    			if(arr[i]==arr[j] && i!=j){
    				arr.splice(j,1)
    			}
    		}
    	}
    	return arr
    };
    document.write(getUniqTags(array));
}
{
	var array = ["test", "test1", "test2", "test3", "test4", "test5", "test6","11"];
	var arrayOne = ["test", "test1", "test2","test4","test5", "test6","test3","15"];
    function unical(array, arrayOne) {
    	var newArray=array.concat(arrayOne);
    	for(var i=0;i<newArray.length;i++){
    		for(var j=0;j<newArray.length;j++){
    			if(newArray[i]==newArray[j] && i!=j){
    				
    			}else{
    				newArray.splice(j,1)
    			}

    		}
    	}
    	return newArray
    }
    document.write(unical(array,arrayOne));
}