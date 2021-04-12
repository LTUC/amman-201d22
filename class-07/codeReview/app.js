'use strict';

// from Grapper website helper function
function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let operationHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// Seattle	23	65	6.3
// let randomCust =[];

let parent = document.getElementById('container');
// console.log(parent);
let seattle = {
    location:'Seattle',
    minCust:23,
    maxCust:65,
    avgPerSale:6.3,
    randomCust:[],
    cookiesPerHour:[],
    total:0, 
    calcRandomNumbOfCust:function(){
        for(let i = 0 ;i<operationHours.length; i++){
            this.randomCust.push(randomValue(this.minCust,this.maxCust));
            // this.randomCust[i] = randomValue(this.minCust,this.maxCust)
        }
    },
    calcNumOfCookiesPerHour:function(){
        let val = 0;
        for(let i = 0 ; i < operationHours.length; i++){
            val = Math.ceil(this.randomCust[i] * this.avgPerSale);
            this.total = this.total + val;
                        // 0          34 
            this.cookiesPerHour.push(val);
            // console.log(this.total)
                                        // [32,34,2,11,2] * 6.3 NAN
                                        // 32*6.3
        }
        // console.log(this.total);
    },
    render:function(){
        let h2El = document.createElement('h2');
        parent.appendChild(h2El);
        h2El.textContent = this.location;

        let unorderdlistEl = document.createElement('ul');

        parent.appendChild(unorderdlistEl);

        let liEl = null;
        for(let i = 0 ; i < this.cookiesPerHour.length; i++){
            liEl = document.createElement('li');
            unorderdlistEl.appendChild(liEl);
            liEl.textContent = operationHours[i] + ': ' +this.cookiesPerHour[i] + ' Coookies';
                                    // [32,33232,,32323,33,3]
        }
        let totalLiItem = document.createElement('li');
        unorderdlistEl.appendChild(totalLiItem);
        totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
    }
}
seattle.calcRandomNumbOfCust();
seattle.calcNumOfCookiesPerHour();
seattle.render();
console.log(seattle);

let tokyo = {
    location:'Tokyo',
    minCust:3,
    maxCust:24,
    avgPerSale:1.2,
    randomCust:[],
    cookiesPerHour:[],
    total:0, 
    calcRandomNumbOfCust:function(){
        for(let i = 0 ;i<operationHours.length; i++){
            this.randomCust.push(randomValue(this.minCust,this.maxCust));
            // this.randomCust[i] = randomValue(this.minCust,this.maxCust)
        }
    },
    calcNumOfCookiesPerHour:function(){
        let val = 0;
        for(let i = 0 ; i < operationHours.length; i++){
            val = Math.ceil(this.randomCust[i] * this.avgPerSale);
            this.total = this.total + val;
                        // 0          34 
            this.cookiesPerHour.push(val);
            // console.log(this.total)

                                        // [32,34,2,11,2] * 6.3 NAN
                                        // 32*6.3
        }
    },
    render:function(){
        let h2El = document.createElement('h2');
        parent.appendChild(h2El);
        h2El.textContent = this.location;

        let unorderdlistEl = document.createElement('ul');

        parent.appendChild(unorderdlistEl);

        let liEl = null;
        for(let i = 0 ; i < this.cookiesPerHour.length; i++){
            liEl = document.createElement('li');
            unorderdlistEl.appendChild(liEl);
            liEl.textContent = operationHours[i] + ': ' +this.cookiesPerHour[i] + ' Coookies';
                                    // [32,33232,,32323,33,3]
        }
        let totalLiItem = document.createElement('li');
        unorderdlistEl.appendChild(totalLiItem);
        totalLiItem.textContent = 'Total :' + this.total + ' Cookies';




    }
}
tokyo.calcRandomNumbOfCust();
tokyo.calcNumOfCookiesPerHour();
tokyo.render();
// console.log(seattle);