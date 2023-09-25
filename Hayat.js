function lastIndexOf(arr, target) {
    let last = -1; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            last = i
        }
    }
    return last 
}

function grabKeys(object) {
    const arr = []; 
    for (const [key, value] of Object.entries(object)) {
        arr.push(key);
    }
    return arr 
}

function grabValues(object) {
    const arr = []; 
    for (const [key, value] of Object.entries(object)) {
        arr.push(value);
    }
    return arr 
}
