function max(arr) {
    let max = 0;
    for (i = 0; i < arr.length; i++) {
        //checks if an element is a number and isn't nan
        if(isNaN(arr[i]) && arr[i] != arr[i]) {
            continue;
        }
        else if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}

function min(arr) {
    let min = 0;
    for (i = 0; i < arr.length; i++) {
        //checks if an element is a number and isn't nan
        if(isNaN(arr[i]) && arr[i] != arr[i]) {
            continue;
        }
        else if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min;
}

function sum(arr){
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        //checks if an element is a number and isn't nan
        if(arr[i] != arr[i]) {
            continue;
        }
        else if (typeof(arr[i]) === "number") {
            sum += arr[i];
        }
    }
    return sum;
}

console.log("[3,'a',0,-5,1,44,-12,3,NaN,0,0,1,2,-3,-3,undefined,2,1,4,-2-3-1]");
console.log(max([3,'a',0,-5,1,44,-12,3,NaN,0,0,1,2,-3,-3,undefined,2,1,4,-2-3-1]));
console.log(min([3,'a',0,-5,1,44,-12,3,NaN,0,0,1,2,-3,-3,undefined,2,1,4,-2-3-1]));
console.log(sum([3,'a',0,-5,1,44,-12,3,NaN,0,0,1,2,-3,-3,undefined,2,1,4,-2-3-1]));