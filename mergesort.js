#!/usr/bin/env node

console.log("hi")

const mergeSort = function (array) {
    if (array.length === 1 || array.length === 0) {
        return array
    };
    const mid = Math.floor((array.length - 1) / 2);
    
    const first = mergeSort(array.slice(0, (mid+1)));
    const second = mergeSort(array.slice(mid+1));
    const result = [];

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            result[k++] = first[i++]
        } else {
            result[k++] = second[j++]
        }
    };

    // Grab the leftovers from 'first'
    while (i < first.length) {
        result[k++] = first[i++];
    }

    // Grab the leftovers from 'second'
    while (j < second.length) {
        result[k++] = second[j++];
    }

    return result
}

const x = mergeSort([])

console.log(x)

