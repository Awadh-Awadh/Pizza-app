alert("awadh")

let price;
let mayo = document.querySelector('#mayo');
let crispy = document.querySelector('#vegetable');
let beef = document.querySelector('#biff');
let quantity = document.querySelector('quanity').value;
let size = document.querySelector('#select').value;


function deliveryCharge(){
  let place = document.querySelector('#delivery').value;
  let deliveryPrice = 300;
    alert(`Your Pizza will be delivered to ${place}, and total charge is ${deliveryPrice}`)
  }
