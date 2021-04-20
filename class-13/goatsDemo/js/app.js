'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('mid-image');
let rightImageElement = document.getElementById('right-image');
let container = document.getElementById('sec-one');



let counts = 0;
let maxAttempts = 10;
let leftIndex; 
let midIndex;
let rightIndex;
let arrOfnames = [];



function Goat(name,source){
  this.name= name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  Goat.allImages.push(this);
  arrOfnames.push(this.name);
}



Goat.allImages =[];

new Goat('cruisin-goat','../images/cruisin-goat.jpg');//[0]
new Goat('goat-away','../images/goat-away.jpg');//[1]
new Goat('goat-out-of-hand','../images/goat-out-of-hand.jpg');//[2]
new Goat('float-your-goat','../images/float-your-goat.jpg');//[3]
new Goat('smiling-goat','../images/smiling-goat.jpg');//[4]
new Goat('sweater-goat','../images/sweater-goat.jpg');//[5]
new Goat('kissing-goat','../images/kissing-goat.jpg');//[6]
new Goat('sassy-goat','../images/sassy-goat.jpg')//[7]

// console.log(Goat.allImages);

let previouslyShown = [];
function checking(idx, arr){
  for(let i = 0 ; i <arr.length; i++){
    if(idx === arr[i]){
      return true
    }
  } return false;
}
function renderTwoImages(){
  console.log('Before', previouslyShown);
  leftIndex = genrateRandomIndex();
  midIndex = genrateRandomIndex();
  rightIndex = genrateRandomIndex(); 

  while(leftIndex === rightIndex || leftIndex === midIndex || midIndex === rightIndex || previouslyShown.includes(leftIndex) || previouslyShown.includes(midIndex) || checking(rightIndex,previouslyShown)){
    rightIndex = genrateRandomIndex();
    midIndex = genrateRandomIndex();
    leftIndex = genrateRandomIndex();
  };

  // 3 different values
  // replace the values each time we run the function !
  previouslyShown = [leftIndex,midIndex,rightIndex];
  
  // previouslyShown = [];
  // previouslyShown.push(leftIndex,midIndex,rightIndex);
  // console.log('After', previouslyShown)


  leftImageElement.src =  Goat.allImages[leftIndex].source;
  Goat.allImages[leftIndex].shown++;
  middleImageElement.src = Goat.allImages[midIndex].source;
  Goat.allImages[midIndex].shown++;
  rightImageElement.src = Goat.allImages[rightIndex].source;
  Goat.allImages[rightIndex].shown++;

}

renderTwoImages();


container.addEventListener('click',handleClicking);

function handleClicking(event){
    counts++;
    if(maxAttempts >= counts){
      if(event.target.id ==='left-image'){
         Goat.allImages[leftIndex].votes++;
       }else if(event.target.id ==='right-image'){
            Goat.allImages[rightIndex].votes++;
    }else if(event.target.id ==='mid-image'){
            Goat.allImages[midIndex].votes++;
    }else{
      alert('you should click on the image');
      counts--;
    }
    renderTwoImages();
    console.log(Goat.allImages);
  }else {
    renderList();
    chart()

    container.removeEventListener('click',handleClicking)
  }
}


// let button = document.getElementById('btn');
// button.addEventListener('click', showingList);

// function showingList(){

//   button.removeEventListener('click',showingList);
// }


let arrOfVotes = [];
let arrOfShown = [];
function renderList(){
  let ul = document.getElementById('unList');
  for(let i = 0 ; i < Goat.allImages.length;i++){
    arrOfVotes.push(Goat.allImages[i].votes);
    arrOfShown.push(Goat.allImages[i].shown);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Goat.allImages[i].name} it has ${Goat.allImages[i].votes} Votes and its seen ${Goat.allImages[i].shown}`;
  }
  console.log(Goat.allImages)

}

function genrateRandomIndex(){
   return Math.floor(Math.random() * Goat.allImages.length); 

}


function chart(){
let ctx = document.getElementById('myChart')
let myChart = new Chart(ctx, { // its an instance 
    type: 'bar',
    data: {
        labels: arrOfnames, // ['goat away' ,  ... 'sassy goat']
        datasets: [{
            label: 'Number Of votes',
            data: arrOfVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderWidth: 1
        },{
          label:'# of Shown',
          data: arrOfShown,
          backgroundColor:[
            "rgb(192,192,192)"
          ],
          borderWidth: 1
        }]
    }
})
}
