function myEach(arr, callback) {                
    for (let i = 0; i < arr.length; i++) {      
      callback(arr[i]);                         
    }   
}

function myMap(arr, callback) {
    const result = [];                                          
    for (let i = 0; i < arr.length; i++) {                     
      const mapVal = callback(arr[i], i, arr);                  
      result.push(mapVal);                                     
    }
    
    return result;                                              
}

function myFilter(arr, callback) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    
    return result;
}