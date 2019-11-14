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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels = ['a','e','i','o','u'];
    var consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    var arr = s.split("");
    for(let i =0; i<arr.length;i++){
        if(vowels.includes(arr[i])){
            console.log(arr[i]);
        }
    }
    for(let i =0; i<arr.length;i++){
        if(consonant.includes(arr[i])){
            console.log(arr[i]);
        }
    }
};

// Sample Input 0

// javascriptloops
// Sample Output 0

// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s