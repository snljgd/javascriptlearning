// find maximum number in array 

function findMax(arr){
    return Math.max(...arr)
}

const number = [10 , 5, 2 , 3 ,12]
console.log(findMax(number))


// Using a simple loop find max number 

function findMax(arr){
    let max = arr[0]
    
    for (let i=1; i <arr.length; i++){
        if (arr[i]>max) {
            max = arr[i];
        }
    }
    return max;
}
const numbers = [ 5,10,21,6,3,9]
console.log(findMax(numbers))


// Rerverse string 

function reverseStr(s){
    return s.split("").reverse().join("");
}
console.log(reverseStr("SUNIL"))


// Palindrome string check

function isPalindrome(str){
    const reversed = str.split("").reverse().join("")
    return str === reversed;
}

console.log(isPalindrome("MADAM"))
console.log(isPalindrome("sunil"))


// Remove duplicate array 

function removeDuplicates(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicates([1,2,5,2,1,2,4,1,5,]))

// sum of aaray 
function sumArray(nums){
    let sum = 0;
    for (let n of nums ) sum += n;
    return sum;
}

console.log(sumArray([1,2,3,4]))


