let calculate = document.querySelector('#calculate');
calculate.addEventListener('click',()=>{
  let totalBill =document.querySelector('#total-bill').value;
  let tipPercent =document.querySelector('#tip-percent').value;
  let split =document.querySelector('#split').value;
  
  // if fields are empty

  if(totalBill==="" || tipPercent==="" || split===""){
    alert("Please Enter Values")
  }
// Calculation 
let total =(totalBill*tipPercent)/split;
total=total.toFixed(2);
let tip = document.querySelector('#tip');
tip.innerHTML=total;
});



const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',()=>{
  var container = document.querySelector('.container');
 container.classList.toggle("dark");
 
})