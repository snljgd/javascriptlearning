 "use strict" ; // treat all JS code as newer version
 
 // alert ( 3+3) // we are using node.js , not browser


 console.log(3+
    4); // code readability should be high

console.log("bangluru")

    // 1. Primitive data type 

// number = 2 to power 53
// bigint 
// string
// boolean = true / false 
// null = standalone value
// undefined 
// symbol == unique
// BigInt


    // 2. Reference data type (non primitive data type) 
        // Array 
        // object 
        // Function  

console.log(typeof null);
window.alert("Hello world!");
alert("Hello world!");


// memory management system  --------------

// java script memory mainly two types 

// 1. stack  (small fixed size data (primitive data types)store karne me )
// 2. heap   (big dynamic size data (object arrays functions  store karne me))

// 1.stack (primitive values) 

// data direct values ke rup me store hota Headers 
// primitive data types :- number string Boolean null undefined symbol bigint 

    // 2. Heap Memory ( Reference valaues) 

    // large and dynamic storage 

    // data reference (pointer) ke jariye access hota he 

    // non primitive types :- object array functions data 


// Garbage Collection 

// java script me automatic garbage collection hota he 

// algorithm : mark and sweep 

// ager koi object reachable nhi he ( koi reference nhi becha to memory free ho jati he )

// let users = { name :"sunil"};

// user = null ; ( object unreachable -> Garbage Collector free kerega)



