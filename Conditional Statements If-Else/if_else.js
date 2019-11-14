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

function getGrade(score) {
    let grade;
    // Write your code here
    if(score>=0 && score<=5){
        grade = "F";
    }
    if(score>5 && score<=10){
        grade = "E";
    }
    if(score>10 && score<=15){
        grade = "D";
    }
    if(score>16 && score<=20){
        grade = "C";
    }
    if(score>21 && score<=25){
        grade = "B";
    }
    if(score>26 && score<=30){
        grade = "A";
    }


    return grade;
}



// Sample Input 0

// 11
// Sample Output 0

// D