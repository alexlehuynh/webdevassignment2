function mySome(arr, conditionFunct) {
    for(let i = 0; i < arr.length; i++) {
        if(conditionFunct(arr[i])) {
            return true;
        }
    }
    return false;
}


function myEvery(arr, conditionFunct) {
    for(let i = 0; i < arr.length; i++) {
        if(!conditionFunct(arr[i])) {
            return false;
        }
    }
    return true;
}


function myReduce(arr, reducerFunct, initialValue) {
    let accumulator = initialValue;
    for(let i = 0; i < arr.length; i++) {
        accumulator = reducerFunct(accumulator, arr[i]);
    }
    return accumulator;
}