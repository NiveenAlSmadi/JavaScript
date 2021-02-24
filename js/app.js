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
var number=prompt('how mutch pieces  you want ??');
  for (var photo=1 ; photo < number && photo < 10 ; photo++) 
{
    document.write('<img src=" https://tse4.mm.bing.net/th?id=OIP.gDJSJXG8EaqidSJRock09QAAAA&pid=Api&P=0&w=300&h=300" />');  
      document.write(photo);
}
var cakeSize=prompt( 'what size do you prefer??');
if(cakeSize.toLocaleLowerCase()===small)
{ console.log('you are in diet');}
else if (cakeSize.toLocaleLowerCase()===medium){
    console.log('the best size');
  }else{
    alert('sorry Wrong Size!!');
  }

  
    var cakeprice=2.5;
    function price(cupcakes){
     var totalprice= 2.5*number ; 
     console.log(totalprice);
 }
 
 function your_order(order){
     var txt=order;
     console.log(txt);
 } 


 
 var element=document.getElementById('price');
 element.innerText="ALways back"
 var element=document.getElementById('size');
 element.innerText="YOUR SIZE IS: " +cakeSize
 confirm( "Have Fun");

 your_order(cakeFlavor);
 price(number);




  for (var number=prompt('how mutch pieces  you want ??'); parseInt(number)>=1;number-=1){
 document.write('<img src="https://tse4.mm.bing.net/th?id=OIP.gDJSJXG8EaqidSJRock09QAAAA&pid=Api&P=0&w=300&h=300" />');}






 



