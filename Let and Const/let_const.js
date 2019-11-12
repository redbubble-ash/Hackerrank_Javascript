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

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let radius = parseFloat(readLine());
    // Print the area of the circle:
    console.log(PI * Math.pow(radius,2));
    // Print the perimeter of the circle:
    let perimeter = 2 * PI * radius;
    console.log(perimeter);
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

// Print the following two lines:

// On the first line, print the  of the circle having radius .
// On the second line, print the  of the circle having radius .
// Sample Input 0

// 2.6
// Sample Output 0

// 21.237166338267002
// 16.336281798666924