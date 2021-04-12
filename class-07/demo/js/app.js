// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned(min,max)
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data





const frankie = {
    kittenName:'Frankie',
    likes:['jummping','crying','sleeping','stealingFood'],
    isGoodWithKids:true,
    isGoodWithOtherCats:false,
    isGoodWithDogs: true,
    breed:'persian',
    age:0, // (3,12);
    getAge:function(){
        this.age = randomValue(3,12);
    },
    creatingKittens:function(){
        //using DOM to get the parent element is going to be.
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
            li.textContent = this.likes[i];// this.likes[0];
        }
        // let li = document.createElement('li'); // create an element
        // unorderlist.appendChild(li);
        // li.textContent = this.likes[0];

        // li = document.createElement('li');
        // unorderlist.appendChild(li);
        // li.textContent = this.likes[1];

        // let li3 = document.createElement('li');
        // unorderlist.appendChild(li3);
        // li3.textContent = this.likes[2];
        let image = document.createElement('img');
        article.appendChild(image);
        image.setAttribute('src', 'images/frankie.jpeg');
        // image.setAttribute('width','500px');
        let a = document.createElement('a');
        article.appendChild(a);
        // a.setAttribute('href','www.google.com');
        // a.textContent = 'google';
        // `<img src= "path" />`





    }

};
frankie.getAge();
frankie.creatingKittens();
// console.log(frankie.getAge());
// console.log(frankie.age);

//Math.random() => random number between 0-1


const sereena = {
    kittenName:'Sereena',
    likes:['jummping','stealingFood'],
    isGoodWithKids:true,
    isGoodWithOtherCats:false,
    isGoodWithDogs: true,
    breed:'Shiraz',
    age:0,
    getAge:function(){
        this.age = randomValue(3,12);
    },
    creatingKittens:function(){
        let container = document.getElementById('kittenProfiles');
        let article = document.createElement('article');
        container.appendChild(article);
        let h2 = document.createElement('h2');
        article.appendChild(h2);
        h2.textContent = this.kittenName; //object that im in 
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
        // let li = document.createElement('li'); // create an element
        // unorderlist.appendChild(li);
        // li.textContent = this.likes[0];

        // li = document.createElement('li');
        // unorderlist.appendChild(li);
        // li.textContent = this.likes[1];

        // let li3 = document.createElement('li');
        // unorderlist.appendChild(li3);
        // li3.textContent = this.likes[2];
        let image = document.createElement('img');
        article.appendChild(image);
        image.setAttribute('src', 'images/serena.jpeg');
        // image.setAttribute('width','500px');
        let a = document.createElement('a');
        article.appendChild(a);
        // a.setAttribute('href','www.google.com');
        // a.textContent = 'google';
        // `<img src= "path" />`
    }

};
sereena.getAge();
sereena.creatingKittens();



// from Grapper website helper function
function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(randomValue(3,20));
//Math.floor => 5.9 => 5;

//Math.ceil => 5.9 = > 6;
// 3.1 =>4

