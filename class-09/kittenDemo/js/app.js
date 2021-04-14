'use strict';

function randomValue(min, max) { // global function
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let container = document.getElementById('kittenProfiles');
let arrOfobjects = [];
// Constructor function (Template)
function Kitten(kittenName,likes,isGoodWithKids,isGoodWithOtherCats,isGoodWithDogs,breed){
   this.kittenName = kittenName;
   this.likes = likes;
   this.isGoodWithKids = isGoodWithKids;
   this.isGoodWithOtherCats = isGoodWithOtherCats;
   this.isGoodWithDogs = isGoodWithDogs;
   this.breed = breed;
   this.newArr = [];
   this.age = 0; 
   arrOfobjects.push(this);
}

let frankie = new Kitten('frankie',['jummping','crying','sleeping','stealingFood'],true,false,true,'persian');

let seerena = new Kitten('serena',['jummping','stealingFood'],false,false,true,'Sheeraz');

let jumper = new Kitten('jumper',['reading','jumping'],true,true,true,'American');
let bashar = new Kitten('Bashar',['nothing','nothing'],false , false ,false,'Human');


Kitten.prototype.getAge = function(){
    this.age = randomValue(3,12);

}

Kitten.prototype.render = function(){

    let article = document.createElement('article');
    container.appendChild(article);
    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.kittenName;
    let paragraph = document.createElement('p');
    article.appendChild(paragraph);
    paragraph.textContent = `${this.kittenName} is a ${this.breed} and his age is ${this.age} years old`;

    let unorderlist = document.createElement('ul');
    article.appendChild(unorderlist);
    let li = null;
    // cuddling,hugging
    for(let i = 0 ; i < this.likes.length ; i++){
        li = document.createElement('li');
        unorderlist.appendChild(li);
        li.textContent = this.likes[i];
    }
    let image = document.createElement('img');
    article.appendChild(image);
    // image.setAttribute('src', 'images/frankie.jpeg');
    image.setAttribute('src', `images/${this.kittenName}.jpeg`);

    let table = document.createElement('table');
    article.appendChild(table);
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);


    
    let interesArr = ['isGoodWithKids','IsGoodWithDogs','IsGoodWithOtherCats'];
    let thElemnt = null;
    for(let i = 0 ;i< interesArr.length;i++){
        thElemnt = document.createElement('th');
        headerRow.appendChild(thElemnt);
        thElemnt.textContent = interesArr[i];
    }

    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    let td1= document.createElement('td');
    dataRow.appendChild(td1);
    td1.textContent = this.isGoodWithKids;
    let td2= document.createElement('td');
    dataRow.appendChild(td2);
    td2.textContent = this.isGoodWithDogs;
    let td3= document.createElement('td');
    dataRow.appendChild(td3);
    td3.textContent = this.isGoodWithOtherCats;


}


// get the form 
const form = document.getElementById('kittenForm');

// second i need to attach it to a addeventlistener!

form.addEventListener('submit', handleSubmitting);

function handleSubmitting(event){
    event.preventDefault(); // will prevent refreshing when you submit!
    // console.log('Event of the form! :',event);
    // console.log(event.target.nameField.value);
    // console.log(event.target.likesField.value);
    console.log(event);
    let newkittenName =event.target.nameField.value;
    // console.log(newkittenName);
    let likes = event.target.likesField.value;
    // console.log(typeof likes);
    // we need to change the data type from a string to an array
    console.log(likes);
    likes = likes.split(',')
    console.log(likes);
    let breed = event.target.breedField.value;
    // console.log(breed);
    let dogs = event.target.isGoodWithDogs.checked;
    // console.log(dogs);        
    let kids = event.target.isGoodWithKids.checked;

    let cats  = event.target.isGoodWithOtherCats.checked;

    let newKitten = new Kitten(newkittenName,likes,breed,kids,cats,dogs);

    
    newKitten.getAge();
    newKitten.render();

}







for(let i = 0 ; i< arrOfobjects.length; i++){
    arrOfobjects[i].getAge();
    arrOfobjects[i].render();
}
