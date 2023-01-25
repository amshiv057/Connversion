const inputEl =document.getElementById("input-btn");
const convertEl=document.getElementById("convert-btn");
const mfEl=document.getElementById("meters/feet");
const lgEl=document.getElementById("liters/gallons");
const kpEl=document.getElementById("kilograms/pounds");
convertEl.addEventListener("click",function(){
         length(inputEl.value);
         volume(inputEl.value);
         mass(inputEl.value)
})
function length(number){
    let res="";
let foot=number*3.28084;
let meter=number/3.28084;
res=`${number} meters = ${foot.toFixed(3)} feet || ${number} feet = ${meter.toFixed(3)} meters`;
mfEl.innerHTML=res;
}
function volume(number){
    let res=""
    let  liter=number/3.785;
    let gallon=number*3.785;
    res=`${number} liters = ${gallon.toFixed(3)} gallons || ${number} gallons = ${liter.toFixed(3)} liters`;
    lgEl.innerHTML=res;
}
function mass(number){
    let res=""
    let kilogram=number/2.205;
    let pound=number*2.205;
    res=`${number} kilograms = ${pound.toFixed(3)} pounds || ${number} pounds= ${kilogram.toFixed(3)} kilos`;
    kpEl.innerHTML=res;
}