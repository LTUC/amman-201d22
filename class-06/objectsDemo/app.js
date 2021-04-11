
// let student = ['Anas',180,75, ['reading','coding','onlinegames'], 1995];


// Objects literals
const anas = {
    stdName:'Anas', //key value pair
    age:23,
    disLikes:['reading assignments','waking up early', 'shawera'],
    covidStatus:false,
    stdGrad:[],
    userNames:[],
    jobInfo:{
        jobTitle:'Software Developer',
        salary: 4000,
    },
    walk:function(x){
            console.log(`i like to walk everyday morning ${x}`);
    },
    talk:function(){
           console.log(`${this.stdName} talking about football all the time and his age is ${this.age}`); 
           console.log(this.covidStatus);
    },
    randomGrades:function(){
        // i will loop inside from 1 - 20 and multiply by 3 
        // and i will fill these values to stdGrade prorerty
        for(let i = 0 ; i <=20; i++){
            // this.stdGrad[i] = i *3;
            // stdGrade [0] = 0 * 3 
               // stdGrade [1] = 1 * 3
                  // stdGrade [2] = 2 * 3   
            this.stdGrad.push(i*3); 

            // [] .push ( 0 * 3) => [0]
            // [0] . push(1 * 3 ) => [0,3];
            // [1] .push(2 * 3 ) => [0,3,6];

             
        }
        console.log(this.stdGrad);

    },fromUser:function(){
        let user = prompt('enter your name');

        this.userNames.push(user);
        console.log(this.userNames);
    }
};



// console.log(anas.stdName);

// console.log(this);
anas.walk(100);
anas.talk();
anas.randomGrades();
// anas.fromUser();
// console.log(anas.jobInfo.salary);
// const mobile = {
//     mobModel:'IPHONEX',
//     price:500,
//     features: ['no lagging','cheep'],
// }
// console.log(mobile);
// console.log(anas.age);
// access values inside an object
// two ways 
// dotnotation
// console.log(anas.disLikes);

//bracketnotation
// let key = 'stdName';
// console.log(anas[key]);

// for(let i = 0; i<anas.disLikes.length;i++){
//         console.log(anas.disLikes[i])
// }

// adding property 

// anas.height = 180;
// console.log(anas);


// Deleting a property 

// delete anas.disLikes;
// console.log(anas);








// human 
// age 
// name
// height
// wegiht 

// talk
//walk 
//work 
//sleep


//mobile
//model 
// color
// number

// call 
// play music 



//Dom 
// document.write('<h3>' + 'Hello World' + '</h3>');
// console.log(document);

let parent = document.getElementById('container');
// console.log(parent);
let userNa = prompt('whats your name?')
let paragraph = document.createElement('p');

parent.appendChild(paragraph);

paragraph.textContent = userNa;

let bodyTag = document.getElementById('body-main');

let h6 = document.createElement('h6');
bodyTag.appendChild(h6);
h6.textContent = 'IBrahim';


