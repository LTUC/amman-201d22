'use strict';

// Truthy and Falsey 
/*

Truthy values
true
numbers numeric other than zero
Strings 
calculations 

Falsey:
false
NaN -> Not A Number 'Bashar' *3
'' empty string
0
let vaarible
*/
// let newThing;

// let value ='';
// if(value){
//     console.log('This is a Truthy value');
// }else{
//     console.log('This is a Falsy value');
// // }
// let anything;
// console.log(anything);

// let user = prompt('whats your name?');
// // Bashar <- Truthy value
// //'' < - !F = 
// if(!user){
//     alert('yoo you should be an actual value')
// }else {
//     alert('Welcome to my website');
// }

// console.log(user);


//loops run the code more than one time until the condition is met

/*

for(initialization ; condition ;  Update ){
    code ... 
}

1)Intilization 
2)Condition --> Run the code 
3)Update

*/ 


// for(let i = 0 ; i<10; i++){
//     console.log('increment by one each time ', i);
// }
// for(let n = 10 ; n > 10; n++){ 10>10? F
//     console.log('decrement by one each time', n);
// }

// for(let n = 10 ; n > 0; n--){
//     console.log('decrement by one each time', n);
// }


// infinite loop
                // 0<10 T
// for(let j = 0 ; j< 10; j--){ -1 -2
//     console.log('decrement by one each time ', j);
// }



//break to stop the loop we use break;
// continue: and skip the rest of the code for one iteration!
// for(let i = 0 ; i<3; i++){
//                 //7
//     console.log('Webiste is loading')
//     // 0 n
//     //1
//     if(i === 1){
//        continue; // skip the iterration 
//     }
//     console.log('increment by one each time ', i);
// }



/*
        condition
we mainly use while if we don't know how many times we're going to loop        
while(expression){
    code .. 
}
*/

// let userName = prompt('whats your name?');

// while(!userName){
//     userName = prompt('Please Write Something!!!');
// }


// let passCode = prompt('enter the code');
// //console.log(typeof passCode);
// // '12345'
// // 12345
// //We can change the not stictly equal 
// // '12345' == 12345
// // console.log(typeof passCode);
// // // passCode = parseInt(passCode);
// // console.log(typeof passCode);
// // k
// //'12345'
// // kk
// while(parseInt(passCode) !== 12345){ // F 12345
//     passCode = prompt('Wrong enter the code again!');
//     // passCode = parseInt(passCode);
// }


/*
Arrays : its a special type of variables can hold multiple values or elements!

let grade1 = 100;
let grade2= 80;
let grade3 = 30;
*/

// let studentsGrade = [100,80,50,30,20,0];
// console.log(studentsGrade);
// console.log(studentsGrade[0]);
// // what is the index? 
// // every element or value in the array has an inex
// // the position of the elemnt inside the array 0 -> the last element!
// // retire and access 
// let movieNames = ['fast&furios','ocean8','hungerGames','johnwick','Darkknight','the great Wall','The purge']
// console.log(movieNames);

// console.log('Getting the first element :', movieNames[0]);


// // movieNames[0]='meBeforeyou';
// // console.log(movieNames);

// // console.log('change the first element!' ,  );

// console.log('Getting the fifth element', movieNames[4]);

// console.log('Getting the last element', movieNames[6]);

// console.log('getting the length of the Array ', movieNames.length);


// console.log('get index of an element', movieNames.indexOf('ocean8'))

// console.log('Adding to the end of the array', movieNames.push('fault in our stars'))

// console.log(movieNames);

// console.log('Remove the last element of the array', movieNames.pop());
// // movieNames.pop();

// console.log(movieNames);






// // let mixedArray = [1,'omar',true, ['Bashar','Israa']]
// // if you wnat to get an element inside the nested array
// // console.log(mixedArray[3][1]);


// /*
// -ask the user 2 questions that accept yes/y no/n and alert him back
// -keep track of the score if the user answer with coorect answer i will give him a point
// -show in the console the Students inside your array in order!
// */
// let score = 0;
// let user = prompt('do you think i have a laptop?');
// switch(user.toLowerCase()){
//     case 'yes':
//     case 'y':
//         alert('ofcourse i do');
//         score++;
//         // score = score + 1;
//         break;    
//     case 'no':
//     case 'n':
//         alert('incorrect');
//         break;
//     default:
//         alert('Okay Whatever you want');      
// }

// let questionTwo = prompt('Do you think im an alien ?');
// questionTwo = questionTwo.toLowerCase();
// if(questionTwo === 'yes' || questionTwo ==='y'){
//     alert('REALLY?');
// }else if(questionTwo ==='no' || questionTwo ==='n'){
//     score++;
//     alert('of course im a human!');
// }else{
//     alert('Alright whatever you want!')
// }



// alert('Thanks for playing your socre is ' +  score);


let studentNames = ['Ahmad','Abdallah','Shatha','Jana','Yazan','Omar','Osama','Ibrahim','Bashar'];
// console.log(studentNames[0]);
console.log(studentNames);
// console.log(studentNames.length);
console.log(studentNames.length) // 9
// 8 
// studentNames[9] = undifined!
for(let i = 0; i<studentNames.length;i++){
    // studentNames[0];
    // studentNames[1];
    // i ===3 
    // if(i === 5){
    //     continue;
    // }
    if( i === 4){ 
        break; // dont continue with the loop stop the loop
    }
    console.log(studentNames[i] , i);

}
// alert(studentNames)