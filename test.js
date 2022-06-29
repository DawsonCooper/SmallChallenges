let unsorted = [4, 1, 10, 3, 6, 7, 11, 12, 15, 14, 18, 9, 22, 28, 34, 26, 48];

let holder = [];

let arrLen = unsorted.length;

let tempSmall = unsorted[0];
let temp;

for (let i = 0; i < arrLen; i++) {
    for (let j = i; j < arrLen; j++) {
        if (tempSmall > unsorted[j]) {
            temp = tempSmall;
            tempSmall = unsorted[j];
            unsorted[j] = temp;
        }
    }
    unsorted[i] = tempSmall;
}
console.log(unsorted);