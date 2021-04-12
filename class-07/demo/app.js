'use strict';


// object Literals

// const ayyoub = {
//     stdName:'Ayyoub',
//     age:25,
//     height:180,
//     likes:['reading assignemnt','Labs','signing','coding'],
//     walk:function(){
//         console.log('Walking under the rain');
//     }
// }

// let humam = {
//     stdName:'Humam',
//     age:27,
//     height:190,
//     likes:['learning journal','prepwork','finalExam'],
//     walk:function(){
//         console.log('Walking under the rain')
//     }
// }



// im writing the properties 
                                    //['learning journal','prepwork','finalExam']
let students = [];                                    
function College(name,age,height,likes){
  this.name =  name;
  this.age = age;
  this.height = height;
  this.likes = likes;
  students.push(this);
}

// prototype
// creating methods will be out side to save memory!
// new instance
let std1 = new College('Humam',27,190,['learning journal','prepwork','finalExam']);
let std2 = new College('Ayyoub',25,180,['reading assignemnt','Labs','signing','coding'])
let std3 = new College('Jana',23,160,['reading','exams','quizzes']);
// console.log(students);
// for(let i = 0 ; i <students.length; i++){
//     console.log(students[i].likes[1]);
// }
// let arrOfobjects = [std1,std2,std3];
// console.log(arrOfobjects);
College.prototype.walk = function(){
    console.log(`${this.name}  Walking under the rain ${this.height}`);
}
College.prototype.talk =function(){
    console.log(`${this.name} is talking about his ${this.age} all the time`);
}
// std1.walk();
// std2.walk();
// std3.walk();
// std2.talk();

// std2.walk();
// std3.walk();

// std1.walk();
// std2.walk();
// std3.walk();
// let arr = [std1,std2,std3];
// console.log(arr);
// console.log(std1);
// console.log(std2);

let cont = document.getElementById('bashar');

let tableEl = document.createElement('table');
cont.appendChild(tableEl);

let headingRow = document.createElement('tr');
tableEl.appendChild(headingRow);


let thEl = document.createElement('th');
headingRow.appendChild(thEl);
thEl.textContent = 'Name';

let thEl2 = document.createElement('th');
headingRow.appendChild(thEl2);
thEl2.textContent = 'Age';

let thEl3 = document.createElement('th');
headingRow.appendChild(thEl3);
thEl3.textContent = 'Weight';

let anotheRow = document.createElement('tr');

tableEl.appendChild(anotheRow);

let tdEl = document.createElement('td');
anotheRow.appendChild(tdEl);
tdEl.textContent = 'Bashar';

let tdEl2 = document.createElement('td');
anotheRow.appendChild(tdEl2);
tdEl2.textContent = '26';

let tdEl3 = document.createElement('td');
anotheRow.appendChild(tdEl3);
tdEl3.textContent = '68';





