'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
function factorial(n){
    var sum = 1;
    for(let i=n; i>0;i--){
        sum = sum * i;
    }
 return sum;
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}

// Sample Input 0

// 4
// Sample Output 0

// 24
// Explanation 0

// We return the value of 4! = 4 X 3 X 2 X 1 = 24.