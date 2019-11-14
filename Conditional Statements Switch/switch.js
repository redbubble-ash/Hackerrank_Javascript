function getLetter(s) {
    let letter;
    // Write your code here
    var arr = s.split("");
    if(['a','e','i','o','u'].includes(arr[0])){
        letter = "A";
    }
    if(['b','c','d','f','g'].includes(arr[0])){
        letter = "B";
    }
    if(['h','j','k','l','m'].includes(arr[0])){
        letter = "C";
    }
    if(['n','p','q','r','s','t','v','w','x','y','z'].includes(arr[0])){
        letter = "D";
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}

// Sample Input 0

// adfgt
// Sample Output 0

// A