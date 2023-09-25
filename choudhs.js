function myIncludes(arr, element) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === element) {return true;}
	}
	return false;
}

function myIndexOf(arr, element) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === element) {return i;}
	}
	return -1;
}

function myPush(arr, ...elements) {
	for (var i = 0; i < elements.length; i++) {
		arr[arr.length] = elements[i];
	}
}
