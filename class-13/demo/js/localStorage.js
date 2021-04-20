'use strict';


console.log(localStorage);

// adding an item to the local Storage 
localStorage.setItem('Name' , 'Bashar');
localStorage.setItem('age', 26);


// getting an item from the local storage 
// retriving the data that i saved!
console.log(localStorage.getItem('age'));


// remove one item  from the local Storage
localStorage.removeItem('Name');


localStorage.setItem('password', '55555');


// remove everything 
localStorage.clear();