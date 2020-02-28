//Arrow Functions

//shorthand 
let add1 = (a, b) => a + b;

// equivalent to: 
let add = (a, b) => {
    return a + b;
};

let sum = add(5, 4);
console.log(sum);

//When using the concise body shorthand, you must surround a returned object literal with parenthesis
let getStats = (a, b) => ({
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: a / b
});

let result = getStats(4, 2);
console.log(result);

let p1 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 29
};

// Most verbose 
let getFullName = (person) => {
    return `${person.firstName} ${person.lastName}`;
};
let result1 = getFullName(p1);
console.log(result1);

let p2 = {   
    firstName: 'Jim',    
    lastName: 'Doe',   
     age: 33 };

// single parameter shorthand 
let getFullName1 = person => {   
     return `${person.firstName} ${person.lastName}`; 
    }
let result2 = getFullName1(p2); 
console.log(result2);

let p3 = {    
    firstName: 'John',  
      lastName: 'Doe',    
      age: 36 };
      
// single param shorthand, concise body 
let getFullName2 = person => `${person.firstName} ${person.lastName}`;

let result3 = getFullName(p3);
console.log(result3);


//No Parenthesis for Single Parameters
//When are arrow function has a single parameter, you may omit the parenthesis around the parameter list. Note that parenthesis are still required for 0 or 2+ parameters:

let isEven = (value) => {
    return value % 2 === 0;
}

let value = isEven(2); // true
let value1 = isEven(3); // false

console.log(value);
console.log (value1);


let greet = () => {
    console.log('Hello!');
}

let add2 = (a,b) => {
    return a + b;
}

let value2 = add2(5,7);
console.log(value2);

 
greet();
