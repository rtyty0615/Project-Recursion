#!/usr/bin/env node

const fibs = function (n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            arr.push(0)
        };
        if (i === 1) {
            arr.push(1)
        };
        if (i > 1) {
            let sum = arr[i-1] + arr[i-2];
            arr.push(sum)
        };
    }
    return console.log(arr)
};

fibs(8)

const fibsRec = function(n) {
    
    if (n === 1) {
        const arr = [];
        return arr.push(0)
    };
    if (n === 2) {
        fibsRec(n-1);
        return arr.push(1)
    };
    fibsRec(n - 1);
    const sum = arr[n - 2] + arr[n - 3];
    return arr.push(sum);
}

fibs(8)
