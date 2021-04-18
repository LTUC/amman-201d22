'use strict';
/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats
  Let students participate by suggesting the steps needed to make the app run
  Continue until students have provided enough detail that they feel confident they could build the app themselves

  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 10 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which goat was clicked on
        - update clicke images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 goats, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  var Image = function ()
  {
    name : 'cool goat',
    votes: 0,
    times shown: 0,
    url : 'cool-goat.jpg'
  }

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/

let leftImageElement = document.getElementById('left-image');
let rightImageElement = document.getElementById('right-image');


// whenever we click on an image we need to add one to a counter
// counts of the rounds till we reach 10
let counts = 0;
let maxAttempts = 10;
let leftIndex; 
let rightIndex;

function Goat(name,source){
  this.name= name;
  this.source = source;
  this.votes = 0;
  Goat.allImages.push(this);
}

// let allImages = [];
// an attribute
Goat.allImages =[];
// console.log(Goat.allImages);
// instances
new Goat('cruisin-goat','../images/cruisin-goat.jpg');//[0]
new Goat('goat-away','../images/goat-away.jpg');//[1]
new Goat('goat-out-of-hand','../images/goat-out-of-hand.jpg');//[2]
new Goat('float-your-goat','../images/float-your-goat.jpg');//[3]
new Goat('smiling-goat','../images/smiling-goat.jpg');//[4]
new Goat('sweater-goat','../images/sweater-goat.jpg');//[5]
new Goat('kissing-goat','../images/kissing-goat.jpg');//[6]
new Goat('sassy-goat','../images/sassy-goat.jpg')//[7]

console.log(Goat.allImages);

function renderTwoImages(){
  leftIndex = genrateRandomIndex(); //0 - 7
  rightIndex = genrateRandomIndex(); // 0 - 7 
  // while () or 
  //     /// 3    ===       3
  // if(leftIndex === rightIndex){ // its only once
  //   leftIndex = genrateRandomIndex(); // 3
  // }
  while(leftIndex === rightIndex){
    leftIndex = genrateRandomIndex();
  }
  // console.log(leftIndex); // 3
  // console.log(rightIndex);             // Goat.allImages[3].source
  // displaying the images 
  leftImageElement.src =  Goat.allImages[leftIndex].source;
  rightImageElement.src = Goat.allImages[rightIndex].source;

}

renderTwoImages();
// console.log(leftIndex);

leftImageElement.addEventListener('click', handleClicking);
rightImageElement.addEventListener('click',handleClicking);

function handleClicking(event){
  // console.log(event.target.id);
    counts++; //0 11
    if(maxAttempts >= counts){
      if(event.target.id ==='left-image'){
         Goat.allImages[leftIndex].votes++;
       }else if(event.target.id ==='right-image'){
            Goat.allImages[rightIndex].votes++;
    }
    renderTwoImages();
    console.log(Goat.allImages);
  }else {
    renderList()
    leftImageElement.removeEventListener('click', handleClicking);
    rightImageElement.removeEventListener('click',handleClicking);
  }
}


function renderList(){
  let ul = document.getElementById('unList');
  for(let i = 0 ; i < Goat.allImages.length;i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Goat.allImages[i].name} it has ${Goat.allImages[i].votes} Votes`;
  }
}
// each time you are calling this function it will get a random value;

function genrateRandomIndex(){
   return Math.floor(Math.random() * Goat.allImages.length); 
                  // 0.99999999999 * 8 => 7.999999994 floor()  => 7
                  // 0.99999999999  * 5 => 4.999999 floor => 4
}