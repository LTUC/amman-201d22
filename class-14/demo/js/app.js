'use strict';

// target our order form from the html
const orderForm = document.getElementById('orderForm');
const orders = document.getElementById('orders');


// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType){
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.drinks.push(this);
  saveToLs();
}

// set the global array to empty
Coffee.drinks = [];


function handleSubmit(event){
  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  const drink = event.target;
  const name = drink.name.value;
  const size = drink.size.value;
  const isHot = drink.isHot.value;
  const dType  = drink.drinkType.value;
  const milk = drink.milk.value;

  new Coffee(name, size, milk, isHot, dType);

  // update the previous orders with the new order
  renderOrders();

}


function saveToLs(){
  // console.log(Coffee.drinks);
  // console.log(JSON.stringify(Coffee.drinks));
  let arrStr = JSON.stringify(Coffee.drinks);

  localStorage.setItem('coffeeSaved', arrStr);
  // JSON - javascript object notation

}


function gettingOrderFromLs(){
  // getting the item from the LS and it should have a key
  let data = localStorage.getItem('coffeeSaved');
  // console.log(data);
  // Converting from JSON Format to normal Arr of object
  // let order = JSON.parse(data || "[]");
  console.log(data);
  let order = JSON.parse(data);
  console.log(order);
  if(order !== null){
    Coffee.drinks = order;
  }
    // [] = null; 
    renderOrders();

}


function renderOrders(){
  // clear all my current uls to prevent duplicate information
  orders.textContent = '';

  // go through the array and output the details of each drink in the array
  for(let i = 0; i < Coffee.drinks.length; i++){
    const drinkLI = document.createElement('li');
    const infoP = document.createElement('p');
    let temp;
    if(Coffee.drinks[i].isHot === 'on'){
      temp = 'cold';
    } else{
      temp = 'hot';
    }
    infoP.textContent = `${Coffee.drinks[i].name} orderd a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }
}

// Add an event listener to the submit button
orderForm.addEventListener('submit', handleSubmit);

gettingOrderFromLs();