// take flavor from customers 
// copare if it valed 
// make actions 



var small='s';
var medium='m';
var cakeFlavor=prompt('choose your flavor ?');
var cakeSize=prompt( 'what size do you prefer??');

if(cakeFlavor.toLocaleLowerCase()==='redvelvet'){
    console.log('perfect flavor');
 }else{
    console.log('cool !!');}
if(cakeSize.toLocaleLowerCase()===small)
{ console.log('you are in diet');}
else if (cakeSize.toLocaleLowerCase()===medium){
    console.log('the best size');
}else{
    alert('sorry Wrong Size!!');
}
 var cakeprice=2.5;
 var element=document.getElementById('price');
 element.innerText="you will pay to medium and small just a  :"+cakeprice
 var element=document.getElementById('size');
 element.innerText="YOUR SIZE IS: " +cakeSize
 confirm( "GOOD BAY ");









