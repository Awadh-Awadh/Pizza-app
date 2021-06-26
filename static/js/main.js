

function calculatePrice() {
  let crispy = document.getElementById('crispy')
  let stuffed = document.getElementById('stuff')
  let glutten =document.getElementById('glutten')
  let mayonaise =document.getElementById('mayo')
  let vegan = document.getElementById('vegetable')
  let perperoni = document.getElementById('biff')
  let itemList = document.querySelector('#select').value;
  let price = document.querySelector('#price');
  let quantity = document.getElementById('quanity').value;

  let prices = [500, 800, 1200];
  let crust = {
    "crispy": 200,
    "stuffed": 250,
    "glutten": 150

  };
  let toppings = {
    "mayonaise": 200,
    "vegan": 150,
    "perperoni": 300
  }
  function checkSmall(){}
  if(stuffed.checked && vegan.checked && itemList==='small' && quantity>0){
    var small = (prices[0] + crust.crispy + toppings.mayonaise)*quantity
    price.innerText = small;
  }
  else if(glutten.checked && perperoni.cheched && itemList === 'small' && quantity>0){
    var small = (prices[0] + crust.glutten + toppings.perperoni)*quantity
    price.innerText = small;
  }
  else{
    var small = (prices[0] + crust.crispy + toppings.mayonaise)*quantity
    price.innerText = small;
  }
 if(stuffed.checked && vegan.checked && itemList==='medium' && quantity>0){
    let medium = (prices[1] + crust.stuffed + toppings.vegan)*quantity;
    price.innerText = medium;
  }
  else if (glutten.checked && perperoni.cheched && itemList === 'medium' && quantity>0){
    var small = (prices[1] + crust.glutten + toppings.perperoni)*quantity
    price.innerText = medium;
  }
  // else{
  //   var small = (prices[1] + crust.crispy + toppings.mayonaise)*quantity
  //   price.innerText = medium;
  // }

  
  else if(stuffed.checked && vegan.checked && itemList==='Medium' && quantity>0){
    let large = (prices[2] + crust.stuffed + toppings.vegan)*quantity;
    price.innerText = large;
  }
  else if(glutten.checked && perperoni.cheched && itemList === 'Medium' && quantity>0){
    var small = (prices[2] + crust.glutten + toppings.perperoni)*quantity
    price.innerText = large;
  }
  // else {
  //   var small = (prices[2] + crust.crispy + toppings.mayonaise)*quantity
  //   price.innerText = large;
  // }



}





function deliveryCharge() {
  let place = document.getElementById('delivery').value;
  let deliveryPrice = 300;
  alert(`Your Pizza will be delivered to ${place}, and delivery charge is ksh. ${deliveryPrice}`)
}
let del = document.querySelector('.custom');
del.addEventListener('click', (e) => {
  e.preventDefault();
  deliveryCharge()

});


let checkout = document.querySelector('.check');
checkout.addEventListener('click', () => {
  let pricing = document.getElementById('pricing');
  pricing.style.opacity = 1;
  calculatePrice()
})