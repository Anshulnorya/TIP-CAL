let calculate = document.querySelector('#calculate');
calculate.addEventListener('click',()=>{
  let totalBill =document.querySelector('#total-bill').value;
  let tipPercent =document.querySelector('#tip-percent').value;
  let split =document.querySelector('#split').value;
  // Calculation 
  let total =(totalBill*tipPercent)/split;
  total=total.toFixed(2);
  let tip = document.querySelector('#tip');
  tip.innerHTML=total;
  
  // if fields are empty

  if(totalBill==="" || tipPercent==="" || split===""){
    // alert("Please Enter Values")
    // alert("Please Enter Values");
    tip.innerHTML=("Please Enter Values");
  }
  if(totalBill<0){
    // alert("Enter positive value");
    // tip.style.fontSize="10px;"
    
    tip.innerHTML=("Please Enter Positive Values");
  }
  if(split<=1){
    // alert("Please Enter More Than 1 Person");
    tip.innerHTML=(`Enter > 1`);
  }
});



const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',()=>{
  var container = document.querySelector('.container');
 container.classList.toggle("dark");
 var btn = document.querySelector('#calculate');
 btn.classList.toggle("dark");
 
})
