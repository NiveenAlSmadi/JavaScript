// take flavor from customers 
// copare if it valed 
// make actions 


var flavor="redvelvet";
var small='s';
var medium='m';
var lovecake=prompt('Do you love CupCake??');
var cakeFlavor=prompt('what is our only flavor ?');

//if(cakeFlavor.toLocaleLowerCase()==='redvelvet'){ console.log('perfect flavor');}else{console.log('cool !!');}
while(flavor!= cakeFlavor){
    cakeFlavor=prompt('not correct please try again ?');
}
alert('you get it ');
var cakeSize=prompt( 'what size do you prefer??');
if(cakeSize.toLocaleLowerCase()===small)
{ console.log('you are in diet');}
else if (cakeSize.toLocaleLowerCase()===medium){
    console.log('the best size');
}else{
    alert('sorry Wrong Size!!');
}
 var cakeprice=2.5;
 var element=document.getElementById('price');
 element.innerText="ALways back"
 var element=document.getElementById('size');
 element.innerText="YOUR SIZE IS: " +cakeSize
 confirm( "Have Fun");

 function your_order(order){
     var txt=order+"2.5jd";
     console.log(txt);

 }

 your_order(cakeFlavor);









