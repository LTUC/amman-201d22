
function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Constructor function (Template)
let arrOfobjects = [];
function Kitten(kittenName,likes,isGoodWithKids,isGoodWithOtherCats,isGoodWithDogs,breed){
   this.kittenName = kittenName;
   this.likes = likes;
   this.isGoodWithKids = isGoodWithKids;
   this.isGoodWithOtherCats = isGoodWithOtherCats;
   this.isGoodWithDogs = isGoodWithDogs;
   this.breed = breed;
   this.newArr = [];
   this.age = 0; // because we didn't know the ages 
   arrOfobjects.push(this);
}

//Creating the objects

let frankie = new Kitten('frankie',['jummping','crying','sleeping','stealingFood'],true,false,true,'persian');

let seerena = new Kitten('serena',['jummping','stealingFood'],false,false,true,'Sheeraz');

let jumper = new Kitten('jumper',['reading','jumping'],true,true,true,'American');
let bashar = new Kitten('Bashar',['nothing','nothing'],false , false ,false,'Human');

// the methods for out objects
Kitten.prototype.getAge = function(){
    this.age = randomValue(3,12);
    // for(let i = 0 ; i < 10; i++){
    //     this.newArr.push(i);
    //     console.log(this.newArr);
    // }

}

Kitten.prototype.render = function(){
    let container = document.getElementById('kittenProfiles');
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
    for(let i = 0 ;i< interesArr.length;i++){
        let thElemnt = document.createElement('th');
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

for(let i = 0 ; i< arrOfobjects.length; i++){
    arrOfobjects[i].getAge();
    arrOfobjects[i].render();
}


// function headerRow(){

// }

// prototype.render(){
//     tableData
// }

// seattle 322,300 , 14   1321321


// function footerRow(){

// }