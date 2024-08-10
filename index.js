//Anonyumous Function & IIFE

//1. Print odd numbers in an array - anonyumous function
 let oddNumber = function(a){
    let out = []
    for(let i of a){
        if(i%2 !== 0 ){
           out.push(i) 
        }
    }
    return out.join(" ")
 }

 let a = [1,2,3,4,5,6,7,8,9,10]
 console.log("Odd Numbers:",oddNumber(a))
 //output - Odd Numbers:  1 3 5 7 9

 //2.convert all strings to title caps in String array
 let StringTitleCaps = function(e){
    let result = []
    for(let i of e){
        let fristchar = i.charAt(0).toUpperCase()
        let subString = i.slice(1)
        result.push(fristchar+subString) 
    }
    return result.join(" ")
 }

 let stringArray = ['guvi', 'learning', 'process']
 console.log("String Title Caps:",StringTitleCaps(stringArray))
//output - Guvi Learning Process

//3. sum of all numbers in Array
let sumOfArray = function(e){
    let sum = 0
    for(let i of e){
        sum += i
    }
    return sum
}

let sumArrayInput = [1,2,3,4,5]
console.log("Sum of Array:",sumOfArray(sumArrayInput))
//output - Sum of Array:  15

//4. Return all prime numbers in array
let primeNumber = function(e){
    let out = []
    for(let i of e){
    let flag = true
       if(i>1){
        if(i === 2){
            out.push(i)
        }else{
            for(let j=2; j<i; j++){
                if(i%j === 0){
                    flag = false
                    break;
                }else{
                    flag = true
                }  
            }
            if(flag){
                out.push(i)
            }
        } 
       }
    }
    return out.join(" ") 
}

 let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
 console.log("Prime Numbers:",primeNumber(inputArray))
 //output - Prime Numbers:  2 3 5 7 11

 //5. Return all the palindromes in a array - IIFE
 let paliInput = [11, 12, 131, 45, 212]

let printPalindrome = (function(e){
    let out = []
    for(let i of e){
        let temp = i.toString().split("").reverse().join("")
        if(i == temp){
            out.push(i)
        }
    }
    return out.join(" ")
})(paliInput)

console.log("All Palindromes in Array: "+printPalindrome)
//output - All Palindromes in Array: 11 131 212

//6. Return median of two sorted arrays of the same size.
let array1 = [1, 12, 15, 26, 38]
let array2 = [2, 13, 17, 30, 45]

let median = (function(a, b){
    let temp = []
    for(let i of a){
        temp.push(i)
    }
    for(let j of b){
        temp.push((j))
    }
    temp.sort(function(a, b){return a-b})
    let midIndex = (temp.length/2)-1;
    let midIndexPlusOne = (temp.length/2);
    let median = (temp[midIndex]+temp[midIndexPlusOne])/2
    return median
})(array1, array2)

console.log("Median of two sorted array given:",median)
//output - Median of two sorted array given: 16

//7. Remove duplicates from array
let  dupArray = [1, 2, 3, 4, 3, 5]

let removeDuplicate = (function(e){
    let out = []
    e.forEach(e=>{
        if(!out.includes(e)){
            out.push(e)
        }
    })
    return out.join(" ")
})(dupArray)

console.log("Array after duplicate removale:", removeDuplicate)
//output - Array after duplicate removale: 1 2 3 4 5

//8. Rotate an array by k times
let rotateArrayInput = [1, 2, 3, 4, 5, 6]
let n=4

let rotateArray = (function(e, n){
    let tempArray = e
    for(let i=0; i<n; i++){
      temp = e[e.length-1]
      tempArray = e.splice(0, e.length-1)
      tempArray.splice(0, 0, temp)
      e = tempArray
    }
    return tempArray.join(" ")
})(rotateArrayInput, n)
console.log("Array after nth rotation: ",rotateArray)
//output - Array after nth rotation:  3 4 5 6 1 2



//Arroe Functions in JavaScript

//1. Print odd numbers in an array

let printOddNumbers = (e)=>{
    let out = []
    for(let i of e){
        if(i%2 !== 0 ){
           out.push(i) 
        }
    }
    return out.join(" ") 
}
let OddInputArray = [1, 2, 3, 4, 5, 6, 7]
console.log("Odd Numbers in Array:", printOddNumbers(OddInputArray))
//output - Odd Numbers in Array: 1 3 5 7

//2. Convert all the strings to title caps in a string array
let TitleCaps = (e)=>{
    let result = []
    for(let i of e){
        let fristchar = i.charAt(0).toUpperCase()
        let subString = i.slice(1)
        result.push(fristchar+subString) 
    }
    return result.join(" ") 
}
let stringInputArray = ['guvi', 'learning', 'process', 'master']
console.log("String Title Caps:",TitleCaps(stringInputArray))
//output - String Title Caps: Guvi Learning Process Master

//3. Sum of all numbers in an array
let SumOfArray = (e)=>{
    let sum = 0
    for(let i of e){
        sum += i
    }
    return sum
}
let sumInputArray = [6, 7, 8, 9, 10]
console.log("Sum of Array:",SumOfArray(sumInputArray)) 
//output - Sum of Array: 40

//4. Return all the prime numbers in an array
let primeNumberInArray = (e)=> {
    let out = []
    for(let i of e){
    let flag = true
       if(i>1){
        if(i === 2){
            out.push(i)
        }else{
            for(let j=2; j<i; j++){
                if(i%j === 0){
                    flag = false
                    break;
                }else{
                    flag = true
                }  
            }
            if(flag){
                out.push(i)
            }
        } 
       }
    }
    return out.join(" ") 
}
let PrimeInputArray = [1, 2, 3, 4, 5, 6, 7, 8]
console.log("Prime Numbers:",primeNumberInArray(PrimeInputArray))
//output - Prime Numbers: 2 3 5 7

//5. Return all the palindromes in an array
let  palindromesInArray = (e)=>{
    let out = []
    for(let i of e){
        let temp = i.toString().split("").reverse().join("")
        if(i == temp){
            out.push(i)
        }
    }
    return out.join(" ") 
}
let palindromeInput = [11, 2442, 131, 45, 212, 24, 35]
console.log("Palindromes in Array:",palindromesInArray(palindromeInput))
//output - Palindromes in Array: 11 2442 131 212