//array


const Myarray = new Array(2,6,3,5,5)
console.log(Myarray[3])

let arr = [2 , "jaipur" , true]

console.log(arr)


let arra = "sunil"
let str = Array.from(arra)
console.log(str)
console.log(str.length) // array ki length 


let fruit = ["apple" ,"painple", "banana", "stoberray", "orange"]
// fruit [2] = "graps"  // array ki value ko update karne ke liye 

console.log(fruit.sort());


// console.log(fruit.at(-2))// negative index right side se  start hoti he jiski first indexing -1 se start hoti he


// array push pop shift unshift 


// push = array ke end me element add karna 

// push = array ke end se element remove karna 

// unshift = array ke start se element add karna 

// shift = array ke start se element remove karnna

let arrb = [2,6,36,2].filter(x=> x%2==0)
// let arrd = [2,6,3]
// arrb.push(10,21)

// console.log(arrb)

// console.log(arrb.slice(1,3))

// console.log(arrb.concat(arrd))


// sort 
let number = [2,9,4,6,3,7]

console.log(number.sort((a,b)=>b-a));

let arr2 = [1, 2, 3, 4, 5];
arr2.sort(() => Math.random() - 0.5);
console.log(arr2); 

let arr1 = [6,7,8,9,0]

console.log(arr2.concat(arr1))


console.log(arr2.includes(3));


let nam = ["sunil" , "jaipur" , "mern"]

let upercase = nam.map(nam => toUpperCase())
console.log(upercase)

