function myMap(arr, callback) {
    const result = [];                                          //empty array to store mapped vals
  
    for (let i = 0; i < arr.length; i++) {                     
      const mapVal = callback(arr[i], i, arr);                  //calls callbackFn with element, index, array// 3 arg for flexibility
  
      result.push(mapVal);                                      //stores into empty array
    }
    
    return result;                                              
}
