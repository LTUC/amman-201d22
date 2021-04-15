'use strict';

// var,
//let & const ES6 =>2015 

// global scope/function  -> var

// let -> scoped: Local 
// console.log(hero); // only the declration

// let hero = 30;

// console.log(hero);

//Erros 

//Refrenence Err
// when you try to refer to a variable that is not exist!
// console.log(car);


//Range Err
// thrown when a number is outside an allowed range.

// let arr = [1,2,3,4,5,6,7];

// // console.log(arr);
// arr.length = 99**9;



//Syntax Err
// when you write a code or a reserved word in js that js engine doesn't understand

// let car ='human';
// fer(let i =0 ;i <5; i++){
//     console.log(i);
// }




//Type Err

// let hero = 'typeErr';
// // hero.push('ewqewqewqe');

// hero();



//Logical Errs

// let total=0 ;

// // total = total  + 5;
// console.log(total);
// for(let i = 0; i <5 ;i++){
//     console.log(total + 5);
// }


// Scopes
let globVar = 'im global variable out side';

// works everyWhere, its not inside a curly brackets 

function scoping(){
    let localVar1 = 'Im inside the function !';

    console.log(localVar1);
    // console.log(localVar2);

}
scoping();

function anotherScoop(){
    let localVar1 = 'Im inside the other function!';
    console.log(localVar1);
}

anotherScoop();



function Student(name,age){
    this.name = name;
    this.age = age;
    this.total = 0;
}
// let arr = [0,0,0];
let newObj = new Student('Bashar',26);
Student.prototype.greeting= function(){
        // let max = [];
        // console.log(max);
      this.total++;
      console.log(`${this.name} and my age is ${this.age}`);  
}
// console.log(qusai);
newObj.greeting();
