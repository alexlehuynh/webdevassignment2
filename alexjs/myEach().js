/* Without using the native “Array.prototype.forEach” method of JavaScript, 
compose a function titled “myEach” that will take in an array of elements and 
execute any callback function on each of those elements.*/

function myEach(arr, callback) {                //takes in arguments of an array, and a callback func
    for (let i = 0; i < arr.length; i++) {      //iterates through each element in given array
      callback(arr[i]);                         //assigns arr[i] to callback and passes this back as an argument into myEach()
    }   
}
  
 