function ArrMath(mode, arr) {
    let result = null;
    for (i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            continue;
        } else {
            switch (mode) {
                case 'min':
                    if (result < arr[i]) {
                        result = arr[i];
                    }
                    break;
                case 'max':
                    if (result > arr[i]) {
                        result = arr[i];
                    }
                    break;
                case 'sum':
                    result += arr[i];
                    break;
                default:
                    break;
            }
        }
    }
    return result;
}

console.log("[3,'a',0,-5,1,44,-12,3,NaN,0,0,1,2,-3,-3,undefined,2,1,4,-2-3-1]");
console.log(ArrMath('max', [3, 'a', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]));
console.log(ArrMath('min', [3, 'a', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]));
console.log(ArrMath('sum', [3, 'a', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]));
console.log(ArrMath('abrakadabra', [3, 'nanachi', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]));